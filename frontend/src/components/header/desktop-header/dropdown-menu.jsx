import React, { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OpenInNew from '@mui/icons-material/OpenInNew';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Link from '../../shared/link/link';

import InnerMenu from './inner-menu';

function DropdownMenu({
  title,
  url,
  children,
  buttonClassName,
  activeClassName,
}) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const checkActive = () => location.pathname.includes(url);

  const handleCloseParent = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        ref={anchorRef}
        aria-haspopup="true"
        onClick={handleToggle}
        endIcon={open ? <ExpandLess /> : <ExpandMore />}
        className={`${buttonClassName} ${checkActive() && activeClassName}`}
      >
        {title}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper className="dropdown-menu">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                  {children.map((item) =>
                    !item.children?.data.length ? (
                      <MenuItem
                        key={item.url}
                        onClick={handleClose}
                        component={Link}
                        to={
                          item.url.includes('http') ? item.url : url + item.url
                        }
                        className="nav-sub-item"
                        activeClassName="selected"
                        target={item.target}
                      >
                        <ListItemText>{item.title.toUpperCase()}</ListItemText>
                        {item.url.includes('http') && (
                          <ListItemIcon>
                            <OpenInNew />
                          </ListItemIcon>
                        )}
                      </MenuItem>
                    ) : (
                      <InnerMenu
                        key={item.url}
                        url={url + item.url}
                        title={item.title}
                        location={location}
                        children={item.children?.data
                          .map((item) => ({ ...item.attributes }))
                          .sort((a, b) => a.order - b.order)}
                        buttonClassName="nav-sub-item"
                        activeClassName="active"
                        closeParent={handleCloseParent}
                      />
                    )
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default DropdownMenu;

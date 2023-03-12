import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import {
  Button,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  Link
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InnerMenu from './InnerMenu';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.light
  },
  navSubItem: {
    color: theme.palette.info.main,
    width: '100%',
    fontWeight: '600',
    fontSize: '0.875rem',
    justifyContent: 'space-between',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    '&:hover': {
      color: theme.palette.info.main
    }
  },
  selected: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.background.default
  }
}));

function DropdownMenu({ title, url, children, buttonClassName, activeClassName }) {
  const classes = useStyles();
  const location = useLocation();
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

  const renderMenuItem = (item) => {
    return item.url.includes('http') ? (
      <MenuItem
        key={item.id}
        onClick={handleClose}
        component={Link}
        className={classes.navSubItem}
        href={item.url}
        target={item.target}
      >
        {item.title.toUpperCase()}
      </MenuItem>
    ) : (
      <MenuItem
        key={item.id}
        onClick={handleClose}
        component={NavLink}
        exact
        activeClassName={classes.selected}
        className={classes.navSubItem}
        to={url + item.url}
      >
        {item.title.toUpperCase()}
      </MenuItem>
    );
  };

  const handleCloseParent = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        ref={anchorRef}
        aria-haspopup="true"
        onClick={handleToggle}
        endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        className={`${buttonClassName} ${checkActive() && activeClassName}`}
      >
        {title}
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                  {children.map((item) =>
                    !item.children?.data.length ? (
                      renderMenuItem(item)
                    ) : (
                      <InnerMenu
                        key={item.id}
                        url={url + item.url}
                        title={item.title}
                        children={item.children?.data.map((item) => ({ ...item.attributes })).sort((a, b) => a.order - b.order)}
                        buttonClassName={classes.navSubItem}
                        activeClassName={classes.active}
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

DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired,
      target: PropTypes.string,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  buttonClassName: PropTypes.string,
  activeClassName: PropTypes.string
};

export default DropdownMenu;

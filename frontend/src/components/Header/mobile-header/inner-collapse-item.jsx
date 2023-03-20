import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OpenInNew from '@mui/icons-material/OpenInNew';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Link from '../../shared/link/link';

function InnerCollapseItem({
  title,
  url,
  children,
  buttonClassName,
  activeClassName,
  onClick,
  location,
}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  const checkActive = () => location.pathname.includes(url);

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        className={`${buttonClassName} ${
          checkActive() && activeClassName
        } collapse`}
      >
        <ListItemText>{title.toUpperCase()}</ListItemText>
        <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((item) => (
            <ListItemButton
              key={item.url}
              onClick={onClick}
              component={Link}
              to={item.url.includes('http') ? item.url : url + item.url}
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
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
}

export default InnerCollapseItem;

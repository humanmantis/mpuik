import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { List, ListItem, Collapse, Link } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  navSubItem: {
    color: theme.palette.info.main,
    paddingLeft: '30px !important',
    fontWeight: '600',
    fontSize: '0.875rem',
    overflowWrap: 'break-word',
    '&:hover': {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.background.default
    }
  },
  collapse: {
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.info.main
    }
  },
  selected: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.background.default
  }
}));

function InnerCollapseItem({ title, url, children, buttonClassName, activeClassName }) {
  const classes = useStyles();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  const checkActive = () => location.pathname.includes(url);

  return (
    <>
      <ListItem
        button
        onClick={handleClick}
        className={`${buttonClassName} ${checkActive() && activeClassName} ${classes.collapse}`}
      >
        {title.toUpperCase()}
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((item) =>
            item.url.includes('http') ? (
              <ListItem
                key={item.id}
                component={Link}
                className={classes.navSubItem}
                href={item.url}
                target={item.target}
                button
              >
                {item.title.toUpperCase()}
              </ListItem>
            ) : (
              <ListItem
                key={item.id}
                component={NavLink}
                exact
                activeClassName={classes.selected}
                className={classes.navSubItem}
                to={url + item.url}
                button
              >
                {item.title.toUpperCase()}
              </ListItem>
            )
          )}
        </List>
      </Collapse>
    </>
  );
}

InnerCollapseItem.propTypes = {
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

export default InnerCollapseItem;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { List, ListItem, Collapse, Link } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InnerCollapseItem from './InnerCollapseItem';

const useStyles = makeStyles((theme) => ({
  navSubItem: {
    color: theme.palette.info.main,
    fontWeight: '600',
    fontSize: '0.875rem',
    overflowWrap: 'break-word',
    paddingLeft: '30px !important',
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

function CollapseItem({ title, url, children, buttonClassName, activeClassName, onClick }) {
  const classes = useStyles();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  const checkActive = () => location.pathname.includes(url);

  const renderMenuItem = (item) =>
    item.url.includes('http') ? (
      <ListItem
        key={item.id}
        component={Link}
        className={classes.navSubItem}
        href={item.url}
        target={item.target}
        button
        onClick={onClick}
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
        onClick={onClick}
      >
        {item.title.toUpperCase()}
      </ListItem>
    );

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
            !item.children.length ? (
              renderMenuItem(item)
            ) : (
              <InnerCollapseItem
                key={item.id}
                url={item.url}
                title={item.title}
                children={item.children.sort((a, b) => a.order - b.order)}
                buttonClassName={classes.navSubItem}
                activeClassName={classes.active}
                onClick={onClick}
              />
            )
          )}
        </List>
      </Collapse>
    </>
  );
}

CollapseItem.propTypes = {
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
  activeClassName: PropTypes.string,
  onClick: PropTypes.func
};

export default CollapseItem;

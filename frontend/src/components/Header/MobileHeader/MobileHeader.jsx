import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Toolbar, IconButton, SwipeableDrawer, List, ListItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../common/Logo';
import CollapseItem from './CollapseItem';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    color: theme.palette.info.main,
    marginRight: theme.spacing(2)
  },
  icon: {
    width: '2rem',
    height: '2rem'
  },
  paper: {
    backgroundColor: theme.palette.primary.light
  },
  nav: {
    width: theme.breakpoints.values.sm / 3
  },
  navItem: {
    color: theme.palette.info.main,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.background.default
    }
  },
  active: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.background.default
  }
}));

function MobileHeader({ navigation }) {
  const classes = useStyles();
  const [showDrawer, setDrawer] = useState(false);

  return (
    <>
      <Toolbar>
        <IconButton
          className={classes.iconButton}
          onClick={() => {
            setDrawer(true);
          }}
        >
          <MenuIcon className={classes.icon} />
        </IconButton>

        <Logo />
      </Toolbar>

      <SwipeableDrawer
        anchor="left"
        open={showDrawer}
        classes={{ paper: classes.paper }}
        onClose={() => {
          setDrawer(false);
        }}
        onOpen={() => {
          setDrawer(true);
        }}
      >
        <div
          tabIndex={0}
          role="button"
          onKeyDown={() => {
            setDrawer(true);
          }}
        >
          <List component="nav" className={classes.nav}>
            {navigation
              .sort((a, b) => a.order - b.order)
              .map((item) =>
                item.children.length === 0 ? (
                  <ListItem
                    key={item.id}
                    component={NavLink}
                    to={item.url}
                    activeClassName={classes.active}
                    className={classes.navItem}
                    exact={item.url === '/'}
                    button
                  >
                    {item.title.toUpperCase()}
                  </ListItem>
                ) : (
                  <CollapseItem
                    key={item.id}
                    url={item.url}
                    title={item.title}
                    children={item.children.sort((a, b) => a.order - b.order)}
                    buttonClassName={classes.navItem}
                    activeClassName={classes.active}
                  />
                )
              )}
          </List>
        </div>
      </SwipeableDrawer>
    </>
  );
}

MobileHeader.propTypes = {
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired,
      target: PropTypes.string,
      url: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string.isRequired,
          order: PropTypes.number.isRequired,
          target: PropTypes.string,
          url: PropTypes.string.isRequired
        })
      )
    })
  ).isRequired
};

export default MobileHeader;

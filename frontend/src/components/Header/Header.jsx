import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppBar, makeStyles } from '@material-ui/core';
import DesktopHeader from './DesktopHeader/DesktopHeader';
import MobileHeader from './MobileHeader/MobileHeader';
import HideOnScroll from '../common/HideOnScroll';

const useStyles = makeStyles((theme) => ({
  header: {
    padding: '0.5rem 0',
    backgroundColor: theme.palette.primary.light,
    borderBottom: '1px solid #98b8cd',
    boxShadow: 'none'
  }
}));

function Header(props) {
  const classes = useStyles();
  const [isDesktop, setDesktopView] = useState(false);

  useEffect(() => {
    const setView = () => setDesktopView(window.innerWidth >= 1520);

    setView();

    window.addEventListener('resize', () => setView());
  }, []);
  return (
    <HideOnScroll>
      <AppBar className={classes.header}>
        {isDesktop ? (
          <DesktopHeader navigation={props.navigation} />
        ) : (
          <MobileHeader navigation={props.navigation} />
        )}
      </AppBar>
    </HideOnScroll>
  );
}

Header.propTypes = {
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

export default Header;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppBar, makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import DesktopHeader from './DesktopHeader/DesktopHeader';
import MobileHeader from './MobileHeader/MobileHeader';
import HideOnScroll from '../common/HideOnScroll';

const useStyles = makeStyles((theme) => ({
  header: {
    padding: '0.5rem 0',
    backgroundColor: theme.palette.primary.light,
    borderBottom: '1px solid #98b8cd',
    boxShadow: 'none',
  },
}));

function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [isDesktop, setDesktopView] = useState(false);

  useEffect(() => {
    const setView = () =>
      setDesktopView(window.innerWidth >= theme.breakpoints.values.md);

    setView();

    window.addEventListener('resize', () => setView());
  }, [theme.breakpoints.values.md]);

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
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default Header;

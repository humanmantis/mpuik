import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import DesktopHeader from './desktop-header/desktop-header';
import HideOnScroll from './shared/hide-on-scroll';
import MobileHeader from './mobile-header/mobile-header';
import './header.scss';
import { Toolbar } from '@mui/material';

function Header(props) {
  const [isDesktop, setDesktopView] = useState(false);

  if (typeof window !== 'undefined') {
    useEffect(() => {
      const setView = () => setDesktopView(window.innerWidth >= 1520);

      setView();

      window.addEventListener('resize', () => setView());
    }, []);
  }

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className="header" id="header">
          {isDesktop ? (
            <DesktopHeader {...props} />
          ) : (
            <MobileHeader {...props} />
          )}
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}

export default Header;

import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OpenInNew from '@mui/icons-material/OpenInNew';
import Link from '../../shared/link/link';
import Logo from '../../shared/logo/logo';
import CollapseItem from './collapse-item';

function MobileHeader({ navigation, location }) {
  const [showDrawer, setDrawer] = useState(false);

  return (
    <>
      <Toolbar className="mobile-header">
        <IconButton
          className="icon-button"
          aria-label="Відкрити меню"
          title="Відкрити меню"
          onClick={() => {
            setDrawer(true);
          }}
        >
          <Menu className="icon" />
        </IconButton>
        <Logo />
      </Toolbar>

      <SwipeableDrawer
        anchor="left"
        open={showDrawer}
        className="mobile-header"
        classes={{ paper: 'paper' }}
        onClose={() => {
          setDrawer(false);
        }}
        onOpen={() => {
          setDrawer(true);
        }}
      >
        <Toolbar className="active-toolbar">
          <IconButton
            className="icon-button"
            aria-label="Закрити меню"
            title="Закрити меню"
            onClick={() => {
              setDrawer(false);
            }}
          >
            <Close className="icon" />
          </IconButton>
          <Logo />
        </Toolbar>
        <div
          tabIndex={0}
          role="button"
          onKeyDown={() => {
            setDrawer(true);
          }}
        >
          <List component="nav" className="nav">
            {navigation
              .map((item) => ({
                ...item.attributes,
                children: [...(item.attributes.children?.data || [])],
              }))
              .sort((a, b) => a.order - b.order)
              .map((item) =>
                item.children?.length === 0 ? (
                  <ListItemButton
                    key={item.url}
                    component={Link}
                    to={item.url}
                    activeClassName="active"
                    className="nav-item"
                    onClick={() => {
                      setDrawer(false);
                    }}
                  >
                    <ListItemText>{item.title.toUpperCase()}</ListItemText>
                {item.url.includes('http') && (
                  <ListItemIcon>
                    <OpenInNew />
                  </ListItemIcon>
                )}
                  </ListItemButton>
                ) : (
                  <CollapseItem
                    key={item.url}
                    url={item.url}
                    title={item.title}
                    location={location}
                    children={item.children
                      .map((item) => ({ ...item.attributes }))
                      .sort((a, b) => a.order - b.order)}
                    buttonClassName="nav-item"
                    activeClassName="active"
                    onClick={() => {
                      setDrawer(false);
                    }}
                  />
                )
              )}
          </List>
        </div>
      </SwipeableDrawer>
    </>
  );
}

export default MobileHeader;

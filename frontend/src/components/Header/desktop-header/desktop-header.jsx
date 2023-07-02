import React from 'react';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import OpenInNew from '@mui/icons-material/OpenInNew';
import Link from '../../shared/link/link';
import Logo from '../../shared/logo/logo';
import DropdownMenu from './dropdown-menu';

function DesktopHeader({ navigation, location }) {
  return (
    <Toolbar className="desktop-header">
      <Grid container component="nav" role="nav" className="nav">
        <Grid item xs={12} md={3} lg={2}>
          <Logo />
        </Grid>
        <Grid item>
          {navigation
            .map((item) => ({
              ...item.attributes,
              children: [...(item.attributes.children?.data || [])],
            }))
            .sort((a, b) => a.order - b.order)
            .map((item) =>
              !item.children?.length ? (
                <Button
                  key={item.url}
                  component={Link}
                  to={item.url}
                  className="nav-item"
                  activeClassName="active"
                  partiallyActive={item.url !== '/'}
                >
                  {item.title.toUpperCase()}
                  {item.url.includes('http') && <OpenInNew />}
                </Button>
              ) : (
                <DropdownMenu
                  key={item.url}
                  url={item.url}
                  title={item.title}
                  location={location}
                  children={item.children
                    .map((item) => ({ ...item.attributes }))
                    .sort((a, b) => a.order - b.order)}
                  buttonClassName="nav-item"
                  activeClassName="active"
                />
              )
            )}
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export default DesktopHeader;

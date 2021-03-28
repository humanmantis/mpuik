import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Toolbar, Button, Grid } from "@material-ui/core";
import DropdownMenu from "./DropdownMenu";
import Logo from "../../common/Logo";

const useStyles = makeStyles((theme) => ({
  nav: {
    flexDirection: "row",
    justifyContent: "space-beetwen",
    alignItems: "center",
  },
  navItem: {
    marginRight: theme.spacing(2),
    padding: "0.4rem 1rem",
    color: theme.palette.info.main,
    fontWeight: "bold",
    borderRadius: "0.875rem",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  active: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.background.default,
  },
}));

function DesktopHeader({ navigation }) {
  const classes = useStyles();
  return (
    <Toolbar>
      <Grid container component="nav" role="nav" className={classes.nav}>
        <Grid item xs={12} md={3} lg={2}>
          <Logo />
        </Grid>
        <Grid item>
          {navigation.map((item) =>
            item.items.length === 0 ? (
              <Button
                key={item.id}
                component={NavLink}
                to={item.path}
                className={classes.navItem}
                activeClassName={classes.active}
                exact={item.path === "/"}
              >
                {item.title}
              </Button>
            ) : (
              <DropdownMenu
                key={item.id}
                path={item.path}
                title={item.title}
                items={item.items}
                buttonClassName={classes.navItem}
                activeClassName={classes.active}
              />
            )
          )}
        </Grid>
      </Grid>
    </Toolbar>
  );
}

DesktopHeader.propTypes = {
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

export default DesktopHeader;

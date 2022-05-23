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
    marginRight: theme.spacing(1),
    padding: "0.4rem 1rem",
    color: theme.palette.info.main,
    fontWeight: "bold",
    borderRadius: "0.875rem",
    "&:hover": {
      color: theme.palette.info.main,
    },
    "&:last-child": {
      marginRight: 0,
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
          {navigation
            .sort((a, b) => a.order - b.order)
            .map((item) =>
              !item.children.length ? (
                <Button
                  key={item.id}
                  component={NavLink}
                  to={item.url}
                  className={classes.navItem}
                  activeClassName={classes.active}
                  exact={item.url === "/"}
                >
                  {item.title}
                </Button>
              ) : (
                <DropdownMenu
                  key={item.id}
                  url={item.url}
                  title={item.title}
                  children={item.children.sort((a, b) => a.order - b.order)}
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
          url: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};

export default DesktopHeader;

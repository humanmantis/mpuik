import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import {
  Button,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  Link,
} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.light,
  },
  navSubItem: {
    color: theme.palette.info.main,
    fontWeight: "600",
    fontSize: "0.875rem",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  selected: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.background.default,
  },
}));

function DropdownMenu({
  title,
  path,
  items,
  buttonClassName,
  activeClassName,
}) {
  const classes = useStyles();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const checkActive = () => location.pathname.includes(path);

  return (
    <>
      <Button
        ref={anchorRef}
        aria-haspopup="true"
        onClick={handleToggle}
        endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        className={`${buttonClassName} ${checkActive() && activeClassName}`}
      >
        {title}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                  {items.map((item) =>
                    item.path.includes("http") ? (
                      <MenuItem
                        key={item.id}
                        onClick={handleClose}
                        component={Link}
                        className={classes.navSubItem}
                        href={item.path}
                        target="_blank"
                      >
                        {item.title.toUpperCase()}
                      </MenuItem>
                    ) : (
                      <MenuItem
                        key={item.id}
                        onClick={handleClose}
                        component={NavLink}
                        activeClassName={classes.selected}
                        className={classes.navSubItem}
                        to={path + item.path}
                      >
                        {item.title.toUpperCase()}
                      </MenuItem>
                    )
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  buttonClassName: PropTypes.string,
  activeClassName: PropTypes.string,
};

export default DropdownMenu;

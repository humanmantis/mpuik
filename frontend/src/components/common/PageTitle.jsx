import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  subtitle: {
    fontWeight: "bold",
    color: theme.palette.info.main,
  },
  pageHead: {
    maxWidth: "800px",
    margin: "0 auto",
    marginBottom: "3rem",
  },
}));

function PageTitle({ title, subtitle }) {
  const classes = useStyles();
  return (
    <div className={classes.pageHead}>
      <Typography
        variant="h3"
        align="center"
        className={classes.title}
        gutterBottom
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="h6"
          align="center"
          component="p"
          className={classes.subtitle}
          paragraph
        >
          {subtitle}
        </Typography>
      )}
    </div>
  );
}

PageTitle.defaultProps = {
  subtitle: "",
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default PageTitle;

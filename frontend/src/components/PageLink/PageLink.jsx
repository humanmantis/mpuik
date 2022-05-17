import React from "react";
import { makeStyles, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles({
  link: {
    fontWeight: "bold",
  },
  alignCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

function PageLink({ title, link }) {
  const classes = useStyles();

  return (
    <div className={classes.alignCenter}>
      <Typography
        variant="h5"
        align="center"
        paragraph
        component={Link}
        href={link}
        className={classes.link}
      >
        {link ? <Link to={link}>{title}</Link> : title}
      </Typography>
    </div>
  );
}

export default PageLink;

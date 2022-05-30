import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Link from "../common/Link";

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
        className={classes.link}
      >
        <Link title={title} link={link}/>
      </Typography>
    </div>
  );
}

export default PageLink;

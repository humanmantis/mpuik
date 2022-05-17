import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import BlockTitle from "../common/BlockTitle";
import Link from "../common/Link";

const useStyles = makeStyles((theme) => ({
  section: {
    margin: "5rem 0",
  },
  list: {
    paddingLeft: "0",
    listStylePosition: "inside",
  },
}));

function ListBlock({ title, subtitle, list }) {
  const classes = useStyles();
  return (
    <section id={title} className={classes.section}>
      <BlockTitle title={title} subtitle={subtitle} />
      <ol className={classes.list}>
        {list?.map((l) => (
          <Typography key={l.id} variant="h6" align="justify" component="li">
            <Link title={l.title} link={l.link} />
          </Typography>
        ))}
      </ol>
    </section>
  );
}

ListBlock.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ),
};

export default ListBlock;

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import BlockTitle from "../common/BlockTitle";
import Markdown from "../common/Markdown";

const useStyles = makeStyles((theme) => ({
  section: {
    margin: "5rem 0",
  },
  top: {
    maxWidth: "800px",
  },
  article: {
    padding: "3rem 4rem",
    backgroundColor: theme.palette.common.white,
    borderRadius: "1rem",
    boxShadow: "0px 14px 36px rgba(0, 0, 0, 0.04)",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 1rem",
    },
  },
  title: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  subtitle: {
    marginBottom: "3rem",
  },
  img: {
    marginBottom: "1rem",
    width: "100%",
    maxHeight: "300px",
    aspectRatio: "16/9",
    objectFit: "cover",
    borderRadius: "0.5rem",
    backgroundColor: theme.palette.grey[300],
    "&:last-child": {
      marginBottom: 0,
    },
  },
}));

function Article({ title, subtitle, content, photos }) {
  const classes = useStyles();
  return (
    <section id={title} className={classes.section}>
      <BlockTitle title={title} subtitle={subtitle} />
      {content && (
        <Grid
          container
          component="article"
          alignContent="center"
          justify="space-between"
          spacing={3}
          className={classes.article}
        >
          <Grid
            item
            xs={12}
            md={!!photos.length ? 8 : 12}
            lg={!!photos.length ? 7 : 12}
          >
            <Markdown content={content} />
          </Grid>
          {photos.length > 0 && (
            <Grid item xs={12} md={4} lg={4}>
              {photos.map((photo) => (
                <img
                  key={photo.attributes.hash}
                  src={photo.attributes.url}
                  alt={photo.attributes.alternativeText}
                  className={classes.img}
                />
              ))}
            </Grid>
          )}
        </Grid>
      )}
    </section>
  );
}

Article.defaultProps = {
  subtitle: "",
  photos: [],
};

Article.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.shape({
        hash: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        alternativeText: PropTypes.string.isRequired,
      }),
    })
  ),
};

export default Article;

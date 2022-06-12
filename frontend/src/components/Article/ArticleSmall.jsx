import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { Grid, Box } from "@material-ui/core";
import Markdown from "../common/Markdown";
import BlockTitle from "../common/BlockTitle";

const useStyles = makeStyles((theme) => ({
  section: {
    margin: "5rem 0",
  },
  article: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "1rem",
    backgroundColor: theme.palette.common.white,
    borderRadius: "1rem",
    boxShadow: "0px 14px 36px rgba(0, 0, 0, 0.04)",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 1rem",
    },
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

function ArticleSmall({ title, subtitle, content, photos }) {
  const classes = useStyles();
  return (
    <section id={title.split(" ").join("")} className={classes.section}>
      <BlockTitle title={title} subtitle={subtitle} />
      <Grid
        container
        component="article"
        alignContent="center"
        justify="space-between"
        spacing={4}
        className={classes.article}
      >
        {!!photos.length && (
          <Box clone order={{ xs: 2, md: 1 }}>
            <Grid item xs={12} md={4}>
              {photos.map((photo) => (
                <img
                  key={photo.attributes.hash}
                  src={photo.attributes.url}
                  alt={photo.attributes.alternativeText}
                  className={classes.img}
                />
              ))}
            </Grid>
          </Box>
        )}
        <Box clone order={{ xs: 1, md: 2 }}>
          <Grid item xs={12} md={!!photos.length ? 8 : 12}>
            <Markdown content={content} />
          </Grid>
        </Box>
      </Grid>
    </section>
  );
}

ArticleSmall.defaultProps = {
  subtitle: "",
  photos: [],
};

ArticleSmall.propTypes = {
  title: PropTypes.string.isRequired,
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

export default ArticleSmall;

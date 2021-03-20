import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { Grid, Typography, Box } from "@material-ui/core";
import Markdown from "../common/Markdown";

const useStyles = makeStyles((theme) => ({
  section: {
    margin: "5rem 0",
  },
  sectionHeader: {
    margin: "0 auto",
    maxWidth: "800px",
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
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: "2rem",
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

function ArticleSmall({ slug, title, subtitle, content, photos }) {
  const classes = useStyles();
  return (
    <section id={slug} className={classes.section}>
      <div className={classes.sectionHeader}>
        <Typography
          variant="h4"
          className={classes.title}
          align="center"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          className={classes.subtitle}
          paragraph
        >
          {subtitle}
        </Typography>
      </div>
      <Grid
        container
        component="article"
        alignContent="center"
        justify="space-between"
        spacing={4}
        className={classes.article}
      >
        {photos.length > 0 && (
          <Box clone order={{ xs: 2, md: 1 }}>
            <Grid item xs={12} md={4}>
              {photos.map((photo) => (
                <img
                  key={photo.id}
                  src={process.env.REACT_APP_IMAGE_URI + photo.url}
                  alt={photo.alternativeText}
                  className={classes.img}
                />
              ))}
            </Grid>
          </Box>
        )}
        <Box clone order={{ xs: 1, md: 2 }}>
          <Grid item xs={12} md={photos.length > 0 ? 8 : 12}>
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
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      alternativeText: PropTypes.string.isRequired,
    })
  ),
};

export default ArticleSmall;

import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import NewsCard from "../NewsCard";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "3rem",
    marginBottom: "3rem",
    fontWeight: 600,
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  newsContainer: {
    marginBottom: "3rem",
  },
}));

function NewsContainer({ title, items }) {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <Grid
        container
        spacing={3}
        justify="center"
        className={classes.newsContainer}
      >
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={item.attributes.slug}>
            <NewsCard item={item.attributes} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

NewsContainer.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.shape({
          data: PropTypes.shape({
            attributes: PropTypes.shape({
              name: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired,
        photo: PropTypes.shape({
          data: PropTypes.shape({
            attributes: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }),
          }),
        }),
      }),
    })
  ).isRequired,
};

export default NewsContainer;

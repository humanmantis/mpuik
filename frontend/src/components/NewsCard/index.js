import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
  Link,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import defaultPostImg from "../../assets/default-post.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    borderRadius: "1rem",
    boxShadow: "0px 7px 22px rgba(143, 134, 196, 0.02);",
    transition: "0.5s",
    "&:hover": {
      boxShadow: " 0px 19px 35px rgba(62, 53, 120, 0.07)",
    },
  },
  content: {
    height: "100%",
  },
  media: {
    height: "220px",
    backgroundColor: theme.palette.grey[300],
    [theme.breakpoints.down("md")]: {
      height: "200px",
    },
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  category: {
    fontWeight: 600,
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: theme.palette.primary.main,
  },
  title: {
    fontWeight: 600,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    lineClamp: 2,
    boxOrient: "vertical",
  },
  text: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    lineClamp: 3,
    boxOrient: "vertical",
  },
}));

const NewsCard = ({ item }) => {
  const styles = useStyles();
  return (
    <Link
      component={RouterLink}
      to={`/news/${item.category.data?.attributes.slug}/${item.slug}`}
      className={styles.link}
    >
      <Card className={styles.root}>
        <CardActionArea className={styles.content}>
          <CardMedia
            className={styles.media}
            image={
              item?.photo.data?.attributes.url
                ? item?.photo.data?.attributes.url
                : defaultPostImg
            }
            title={item.title}
          />
          <CardContent className={styles.content}>
            <Typography variant="body1" className={styles.category} paragraph>
              <Link
                component={RouterLink}
                to={`/news/${item.category.data?.attributes.slug}`}
              >
                {item.category.data?.attributes.name}
              </Link>
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className={styles.title}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
              component="p"
              className={styles.text}
              paragraph
            >
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

NewsCard.propTypes = {
  item: PropTypes.shape({
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
};

export default NewsCard;

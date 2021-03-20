import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    margin: "20px 10px",
    maxWidth: 380,
  },
  media: {
    height: 140,
  },
  link: {
    textDecoration: "none",
  },
  category: {
    marginTop: 30,
    fontWeight: 600,
    fontSize: 18,
    lineHeight: "28px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#0D6F93",
  },
  title: {
    marginTop: 10,
    fontWeight: 600,
    fontSize: 20,
    lineHeight: "27px",
    color: "#06040A",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: "28px",
    color: "#06040A",
    marginBottom: 30,
  },
});

const NewsCard = ({ item }) => {
  const styles = useStyles();
  return (
    <Link to={`/news/${item.id}`} className={styles.link}>
      <Card className={styles.root}>
        <CardActionArea>
          <CardMedia
            className={styles.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className={styles.category}>Категорія</Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={styles.title}
            >
              Lizard
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={styles.text}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default NewsCard;

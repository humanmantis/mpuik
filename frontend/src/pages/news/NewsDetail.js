import React from "react";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import NewsCard from "../../components/NewsCard";

const useStyles = makeStyles((theme) => ({
  readMore: {
    marginTop: 80,
    marginBottom: 60,
    fontWeight: 600,
    fontSize: 32,
    lineHeight: "44px",
    color: "#0D6F93",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  img: {
    marginTop: 80,
    height: "100%",
    minHeight: 500, //disable it if there will be a real photo
    background: "gray",
    minWidth: "100%",
  },
  subtitle: {
    marginTop: 60,
    fontWeight: 600,
    fontSize: 26,
    lineHeight: "38px",
    color: "#06040A",
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    lineHeight: "28px",
    color: "#06040A",
  },
  mainTitle: {
    fontWeight: 600,
    fontSize: 60,
    lineHeight: "80px",
    color: "#0D6F93",
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
      lineHeight: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
      lineHeight: "40px",
    },
  },
  newsItem: {
    background: "#ffffff",
    padding: 80,
    [theme.breakpoints.down("md")]: {
      padding: 40,
    },
    [theme.breakpoints.down("sm")]: {
      padding: 20,
    },
  },
  mb: {
    marginBottom: 80,
  },
}));

const data = [
  {
    id: 1,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
  {
    id: 2,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
  {
    id: 3,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
];

const newsDetail = [
  {
    subtitle: "Параграф 1 Параграф 1 ",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ",
  },
  {
    subtitle:
      "Параграф 2 Параграф 2 Параграф 2 Параграф 2 Параграф 2 Параграф 2 Параграф 2 Параграф 2 Параграф 2 Параграф 2 Параграф 2 Параграф 2  ",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ",
  },
  {
    subtitle: "Параграф 3 Параграф 3 Параграф 3 ",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ",
  },
];

const NewsDetail = ({ params }) => {
  const styles = useStyles();
  return (
    <>
      <div>
        <img src="la" alt="img" className={styles.img} />
      </div>
      <Container fixed>
        <div className={styles.newsItem}>
          <Typography className={styles.mainTitle}>
            Заголовок на кілька рядків Заголовок на кілька рядків Заголовок на
            кілька рядків
          </Typography>
          {newsDetail.map((item) => (
            <div key={item.subtitle}>
              <Typography className={styles.subtitle}>
                {item.subtitle}
              </Typography>
              <Typography className={styles.text}>{item.text}</Typography>
            </div>
          ))}
        </div>
        <Typography className={styles.readMore}>Читайте також</Typography>
        <Grid container justify="center" className={styles.mb}>
          {data.map((item) => (
            <Grid item key={item.id}>
              <NewsCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default NewsDetail;

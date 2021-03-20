import React, { useState } from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Layout from "../../components/common/Layout";
import Pagination from "../../components/Pagination";
import NewsCard from "../../components/NewsCard";

const useStyles = makeStyles((theme) => ({
  block: {
    flex: "0 1 50%",
    maxHeight: 500,
    [theme.breakpoints.down("md")]: {
      flex: "0 1 100%",
    },
  },
  blockRight: {
    padding: 50,
    background: "#0D6F93",
    [theme.breakpoints.down("sm")]: {
      padding: 20,
    },
  },
  img: {
    height: "100%",
    minHeight: 500, //disable it if there will be a real photo
    background: "gray",
    minWidth: "100%",
  },
  category: {
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: 14,
    padding: "7px 32px",
    maxWidth: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryTitle: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "28px",
    color: "#FFFFFF",
  },
  blockTitle: {
    marginTop: 10,
    fontWeight: 600,
    fontSize: 28,
    lineHeight: "38px",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      lineHeight: "28px",
    },
  },
  blockText: {
    marginTop: 30,
    fontSize: 16,
    lineHeight: "28px",
    color: "#FFFFFF",
  },
  button: {
    marginTop: 80,
    background: "#FFFFFF",
    borderRadius: 14,
    padding: "17px 50px",
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
    },
  },
  buttonText: {
    fontSize: 18,
    lineHeight: "25px",
    color: "#06040A",
  },
  buttonLink: {
    textDecoration: "none",
  },
  lastNewsTitle: {
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
  {
    id: 4,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
  {
    id: 5,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
  {
    id: 6,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
  {
    id: 7,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
  {
    id: 8,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
  {
    id: 9,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
  {
    id: 10,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
  {
    id: 11,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
  {
    id: 12,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
  {
    id: 13,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
  {
    id: 14,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
  {
    id: 15,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
  {
    id: 16,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
  {
    id: 17,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
  {
    id: 18,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
  {
    id: 19,
    category: "Категорія",
    title: "Заголовок",
    text:
      "Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст",
    img: "",
  },
];

function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const id = 1;
  const styles = useStyles();

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };
  return (
    <Layout
      title="Новини"
      subtitle="Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст"
    >
      <Grid container justify="space-between">
        <Grid item md={12} className={styles.block}>
          <img src="lala" alt="img" className={styles.img} />
        </Grid>
        <Grid item md={12} className={`${styles.block} ${styles.blockRight}`}>
          <div className={styles.category}>
            <Typography className={styles.categoryTitle}>Категорія</Typography>
          </div>
          <Typography className={styles.blockTitle}>
            Заголовок на кілька рядків Заголовок на кілька рядків Заголовок на
            кілька рядків{" "}
          </Typography>
          <Typography className={styles.blockText}>
            Заголовок на кілька рядків Заголовок на кілька рядків Заголовок на
            кілька рядків{" "}
          </Typography>
          <Button className={styles.button}>
            <Link to={`/news/${id}`} className={styles.buttonLink}>
              <Typography className={styles.buttonText}>Читати</Typography>
            </Link>
          </Button>
        </Grid>
      </Grid>
      <Typography className={styles.lastNewsTitle}>Останні новини</Typography>
      <Grid container justify="center">
        {currentItems.map((item) => (
          <Grid item key={item.id}>
            <NewsCard item={item} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        paginate={paginate}
        totalItems={data.length}
      />
    </Layout>
  );
}

export default News;

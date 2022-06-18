import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import { Container, makeStyles, Typography } from "@material-ui/core";
import NewsContainer from "../../components/NewsContainer/NewsContainer";
import Loader from "../../components/common/Loader";
import Markdown from "../../components/common/Markdown";
import defaultPostImg from "../../assets/default-post.jpg";

const GetNews = loader("../../graphql/pages/news/GetNews.gql");

const useStyles = makeStyles((theme) => ({
  img: {
    height: "100%",
    maxHeight: "500px",
    maxWidth: "400px",
    float: "right",
    margin: "0 0 1.5rem 1.5rem",
    boxShadow: "0px 7px 22px rgb(143 134 196 / 30%)",
    objectFit: "contain",
    [theme.breakpoints.only("md")]: {
      maxHeight: "450px",
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: "400px",
      width: "100%",
      maxWidth: "none",
      float: "none",
      margin: "0 0 1.5rem 0"
    },
    [theme.breakpoints.only("xs")]: {
      maxHeight: "300px",
    },
  },
  title: {
    fontWeight: 600,
    color: theme.palette.primary.main,
    marginBottom: "3rem",
  },
  news: {
    background: theme.palette.common.white,
    padding: "3rem",
    margin: "5rem 0",
    [theme.breakpoints.down("md")]: {
      padding: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
  },
  container: {
    marginTop: "-4px",
  },
}));

const NewsDetail = ({ params }) => {
  const styles = useStyles();
  const { loading, error, data } = useQuery(GetNews, {
    variables: { slug: params.slug },
  });

  const relatedPosts = data?.relatedPosts.data;
  const post = data?.posts.data[0];

  if (loading) return <Loader />;
  if (!post) return <Redirect to="/news" />;
  if (error) return <Redirect to="/error" />;

  return (
    <Container fixed className={styles.container}>
      <section className={styles.news}>
        <img
          src={
            post?.attributes.photo.data?.attributes.url
              ? post?.attributes.photo.data?.attributes.url
              : defaultPostImg
          }
          alt={post.attributes.tile}
          className={styles.img}
        />
        <Typography variant="h3" className={styles.title} gutterBottom>
          {post.attributes.title}
        </Typography>
        <Markdown content={post.attributes.content} />
      </section>
      {!!relatedPosts.length && (
        <NewsContainer title="Читайте також" items={relatedPosts} />
      )}
    </Container>
  );
};

export default NewsDetail;

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
    marginTop: "5rem",
    height: "500px",
    background: theme.palette.grey[300],
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.only("md")]: {
      height: "450px",
    },
    [theme.breakpoints.only("sm")]: {
      height: "400px",
    },
    [theme.breakpoints.only("xs")]: {
      height: "300px",
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
    marginBottom: "5rem",
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

  const relatedPosts = data?.relatedPosts;
  const post = data?.posts[0];

  if (loading) return <Loader />;
  if (!post) return <Redirect to="/news" />;
  if (error) return <Redirect to="/error" />;

  return (
    <>
      <img
        src={
          post?.photo?.url
            ? process.env.REACT_APP_IMAGE_URI + post?.photo?.url
            : defaultPostImg
        }
        alt={post.tile}
        className={styles.img}
      />
      <Container fixed className={styles.container}>
        <section className={styles.news}>
          <Typography variant="h3" className={styles.title} gutterBottom>
            {post.title}
          </Typography>
          <Markdown content={post.content} />
        </section>
        <NewsContainer title="Читайте також" items={relatedPosts} />
      </Container>
    </>
  );
};

export default NewsDetail;

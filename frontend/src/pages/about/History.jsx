import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import { makeStyles } from "@material-ui/core";
import { Container, Grid, Paper, Collapse, Button } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Gallery from "../../components/Gallery/Gallery";
import Location from "../../components/Location/Location";
import PageTitle from "../../components/common/PageTitle";
import Markdown from "../../components/common/Markdown";
import TopWaves from "../../components/background/PageWaves";
import Loader from "../../components/common/Loader";
import constants from "../../config/constants";

const GetPage = loader("../../graphql/pages/GetPage.gql");

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "600px",
    [theme.breakpoints.only("lg")]: {
      height: "550px",
    },
    [theme.breakpoints.only("md")]: {
      height: "550px",
    },
    [theme.breakpoints.only("sm")]: {
      height: "300px",
    },
    [theme.breakpoints.only("xs")]: {
      height: "150px",
    },
  },
  top: {
    maxWidth: "800px",
  },
  title: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  subtitle: {
    marginBottom: "3rem",
  },
  content: {
    margin: "0 auto",
    padding: "5rem 7rem",
    paddingBottom: "4rem",
    maxWidth: "1000px",
    background: "#fff",
    boxShadow: "0px 14px 36px rgba(0, 0, 0, 0.04)",
    borderRadius: "1rem",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      padding: "3rem 4rem",
    },
    [theme.breakpoints.only("xs")]: {
      padding: "2rem 1rem",
    },
  },
  mainMedia: {
    position: "absolute",
    width: "100%",
    maxHeight: "800px",
    objectFit: "cover",
    borderRadius: "1rem",
    backgroundColor: theme.palette.grey[300],
    left: 0,
    bottom: "50px",
    zIndex: -5,
    [theme.breakpoints.only("xs")]: {
      bottom: "30px",
    },
  },
  button: {
    marginTop: "1rem",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    borderRadius: "1rem",
  },
  containerCollapse: {
    backgroundImage:
      "linear-gradient(180deg, transparent 0%, transparent 80%, rgba(0,0,0,0.2) 100%)",
  },
  enteredrCollapse: {
    backgroundImage: "none",
  },
  margin: {
    marginTop: "5rem",
  },
}));

function History() {
  const classes = useStyles();
  const { contentType } = constants;

  const { loading, error, data } = useQuery(GetPage, {
    variables: { slug: "history" },
  });
  const [checked, setChecked] = useState(false);

  const handleChange = () => setChecked((prev) => !prev);

  const history = data?.pages?.data[0]?.attributes;
  const article = history?.content.find(
    (content) => content.__typename === contentType.article
  );
  const gallery = history?.content.find(
    (content) => content.__typename === contentType.gallery
  );

  if (loading) return <Loader />;
  if (!history || error) return <Redirect to="/error" />;

  return (
    <>
      <TopWaves />
      <Container className="main-container" fixed>
        <Grid
          container
          component="section"
          alignContent="center"
          justify="center"
        >
          <PageTitle title={history.title} subtitle={history.subtitle} />
          <Grid item xs={12}>
            <Paper component="article" className={classes.content}>
              <Collapse
                in={checked}
                collapsedHeight={400}
                classes={{
                  container: classes.containerCollapse,
                  entered: classes.enteredrCollapse,
                }}
              >
                <Markdown content={article?.content} />
              </Collapse>
              <Button
                onClick={handleChange}
                endIcon={checked ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                className={classes.button}
              >
                Показати {checked ? "менше" : "більше"}
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      {article?.photos?.data?.length && (
        <div className={classes.container}>
          <img
            src={article?.photos?.data[0].attributes.url}
            alt={article?.photos?.data[0].attributes}
            className={classes.mainMedia}
          />
        </div>
      )}

      {gallery && (
        <Gallery
          title={gallery.title}
          subtitle={gallery.subtitle}
          type={gallery.type}
          gallery={gallery.photos?.data}
        />
      )}

      {history?.location?.data?.attributes && (
        <Location
          title={history.location.data.attributes.title}
          address={history.location.data.attributes.address}
          phone={history.location.data.attributes.phone}
          email={history.location.data.attributes.email}
          list={history.location.data.attributes.list}
          latitude={history.location.data.attributes.latitude}
          longitude={history.location.data.attributes.longitude}
          className={classes.margin}
        />
      )}
    </>
  );
}

export default History;

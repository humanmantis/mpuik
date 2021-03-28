import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import { makeStyles, Typography, Link } from "@material-ui/core";
import Layout from "../../components/common/Layout";
import Loader from "../../components/common/Loader";

const GetEducationalProgramsPage = loader(
  "../../graphql/pages/student/GetEducationalProgramsPage.gql"
);

const useStyles = makeStyles({
  link: {
    fontWeight: "bold",
  },
  alignCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

function EducationalProgramms() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GetEducationalProgramsPage);
  const page = data?.educationalProgram;
  const programs = page?.programs;

  if (loading) return <Loader />;
  if (error) return <Redirect to="/error" />;
  return (
    <Layout title={page.title} subtitle={page.subtitle}>
      {programs && (
        <section className={classes.alignCenter}>
          {programs.map((program) => (
            <Typography
              key={program.id}
              variant="h5"
              align="center"
              paragraph
              component={Link}
              href={program.path}
              className={classes.link}
            >
              {program.title}
            </Typography>
          ))}
        </section>
      )}
    </Layout>
  );
}

export default EducationalProgramms;

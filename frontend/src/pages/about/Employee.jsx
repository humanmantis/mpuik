import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import { makeStyles } from "@material-ui/core";
import Obfuscate from "react-obfuscate";

import {
  Container,
  Paper,
  Grid,
  Box,
  Typography,
  Link,
} from "@material-ui/core";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import Markdown from "../../components/common/Markdown";
import TopWaves from "../../components/background/PageWaves";
import defaultProfileImage from "../../assets/default-profile.jpg";
import Loader from "../../components/common/Loader";
import PageLink from "../../components/common/Link";

const GetEmployee = loader("../../graphql/pages/about/GetEmployee.gql");

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "3rem",
  },
  content: {
    padding: "3rem 4rem",
    boxShadow: "0px 14px 36px rgba(0, 0, 0, 0.04)",
    borderRadius: "1rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 1rem",
    },
  },
  title: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  subtitle: {
    marginBottom: "3rem",
  },
  nomargin: {
    marginBottom: "0",
  },
  list: {
    paddingLeft: "0",
    listStylePosition: "inside",
  },
  listCompact: {
    paddingLeft: "0",
    marginTop: "0",
    marginBottom: "2rem",
    listStylePosition: "inside",
  },
  marginTop: {
    marginTop: "1rem",
    marginBottom: "0",
  },
  img: {
    width: "100%",
    maxHeight: "500px",
    objectFit: "cover",
    marginBottom: "3rem",
    [theme.breakpoints.only("sm")]: {
      objectFit: "contain",
    },
  },
  subitem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2.5rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1.5rem",
    },
  },
  iconContainer: {
    width: "2.5rem",
    height: "2.5rem",
    padding: ".5rem",
    marginRight: "1.5rem",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50%",
    transform: "scale(1.2)",
    [theme.breakpoints.down("md")]: {
      marginRight: "1rem",
      transform: "scale(1)",
    },
  },
  icon: {
    color: theme.palette.common.white,
  },
  link: {
    fontSize: "1.1rem",
    fontWeight: "600",
    overflowWrap: "anywhere",
  },
}));

function Employee({ params }) {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GetEmployee, {
    variables: { slug: params.slug },
  });

  const employee = data?.employees.data[0].attributes;

  if (loading) return <Loader />;
  if (error) return <Redirect to="/error" />;
  if (!employee) return <Redirect to="/404" />;

  return (
    <>
      <TopWaves />
      <Container className={`main-container ${classes.container}`} fixed>
        <Paper component="section" className={classes.content}>
          <Grid container spacing={3} justify="space-between">
            <Box clone order={{ xs: 2, md: 1 }}>
              <Grid item xs={12} md={8} lg={7}>
                <Typography
                  variant="h4"
                  align="center"
                  gutterBottom
                  className={classes.title}
                >
                  {employee.fullname}
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  paragraph
                  className={classes.subtitle}
                >
                  {employee.position}
                </Typography>
                {employee.academiclevel && (
                  <Typography
                    variant="subtitle1"
                    paragraph
                    className={classes.nomargin}
                  >
                    <b>Наукоів ступінь:</b> {employee.academiclevel}
                  </Typography>
                )}
                {employee.academicstatus && (
                  <Typography
                    variant="subtitle1"
                    paragraph
                    className={classes.nomargin}
                  >
                    <b>Вчене звання:</b> {employee.academicstatus}
                  </Typography>
                )}
                {employee.interests && (
                  <Typography variant="subtitle1" paragraph>
                    <b>Область наукових інтересів:</b> {employee.interests}
                  </Typography>
                )}
                {employee.sefleducation && (
                  <Typography
                    variant="subtitle1"
                    paragraph
                    className={classes.marginTop}
                  >
                    <b>
                      <PageLink
                        title={
                          "Стажування, підвищення кваліфікації, самоосвіта"
                        }
                        link={employee.sefleducation}
                        target="_blank"
                      />
                    </b>
                  </Typography>
                )}
                {employee.awards && (
                  <Typography
                    variant="subtitle1"
                    paragraph
                    className={classes.nomargin}
                  >
                    <b>
                      <PageLink
                        title={"Відзнаки, подяки"}
                        link={employee.awards}
                        target="_blank"
                      />
                    </b>
                  </Typography>
                )}

                {!!employee.syllabi.data?.length && (
                  <>
                    <Typography
                      variant="subtitle1"
                      paragraph
                      className={classes.marginTop}
                    >
                      <b>Дисципліни, які викладає:</b>
                    </Typography>
                    <ol className={classes.listCompact}>
                      {employee.syllabi.data.map((syllabus) => (
                        <Typography
                          key={syllabus.attributes.discipline}
                          variant="body1"
                          align="justify"
                          component="li"
                        >
                          {syllabus.attributes.link ? (
                            <PageLink
                              title={syllabus.attributes.discipline}
                              link={syllabus.attributes.link}
                            />
                          ) : (
                            syllabus.attributes.discipline
                          )}
                        </Typography>
                      ))}
                    </ol>
                  </>
                )}

                {!!employee.bio && <Markdown content={employee.bio} />}
                {employee.publications.length > 0 && (
                  <>
                    <Typography
                      variant="h5"
                      gutterBottom
                      className={classes.title}
                    >
                      Публікації
                    </Typography>
                    <ol className={classes.list}>
                      {employee.publications.map((p) => (
                        <Typography
                          key={p.id}
                          variant="body1"
                          align="justify"
                          component="li"
                        >
                          {p.link ? (
                            <PageLink title={p.title} link={p.link} />
                          ) : (
                            p.title
                          )}
                        </Typography>
                      ))}
                    </ol>
                  </>
                )}
              </Grid>
            </Box>
            <Box clone order={{ xs: 1, md: 2 }}>
              <Grid item xs={12} md={4} lg={4}>
                <img
                  src={
                    employee.photo.data?.attributes.url
                      ? employee.photo.data.attributes.url
                      : defaultProfileImage
                  }
                  alt={
                    employee.photo.data?.attributes.alternativeText ??
                    "Default Photo"
                  }
                  className={classes.img}
                />
                {employee.email && (
                  <div className={classes.subitem}>
                    <div className={classes.iconContainer}>
                      <EmailOutlinedIcon className={classes.icon} />
                    </div>
                    <Typography variant="body1">
                      <Link
                        className={classes.link}
                        component={Obfuscate}
                        email={employee.email}
                      />
                    </Typography>
                  </div>
                )}
                {employee.googleScholarLink && (
                  <div className={classes.subitem}>
                    <div className={classes.iconContainer}>
                      <SchoolOutlinedIcon className={classes.icon} />
                    </div>
                    <Typography
                      variant="body1"
                      className={classes.link}
                      component={Link}
                      href={employee.googleScholarLink}
                    >
                      Google Scholar
                    </Typography>
                  </div>
                )}
              </Grid>
            </Box>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default Employee;

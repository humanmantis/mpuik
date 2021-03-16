import React from 'react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { makeStyles } from '@material-ui/core';
import {
  Container,
  Paper,
  Grid,
  Box,
  Typography,
  Link,
} from '@material-ui/core';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import Markdown from '../../components/common/Markdown';
import TopWaves from '../../components/background/PageWaves';
import defaultProfileImage from '../../assets/default-profile.jpg';

const GetEmployee = loader('../../graphql/GetEmployee.gql');

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: '3rem',
  },
  content: {
    padding: '3rem 4rem',
    boxShadow: '0px 14px 36px rgba(0, 0, 0, 0.04)',
    borderRadius: '1rem',
    [theme.breakpoints.down('md')]: {
      padding: '2rem 1rem',
    },
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  subtitle: {
    marginBottom: '3rem',
  },
  list: {
    paddingLeft: '0',
    listStylePosition: 'inside',
  },
  img: {
    width: '100%',
    maxHeight: '500px',
    objectFit: 'cover',
    marginBottom: '3rem',
    [theme.breakpoints.down('md')]: {
      maxHeight: '300px',
    },
  },
  subitem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2.5rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '1.5rem',
    },
  },
  iconContainer: {
    width: '2.5rem',
    height: '2.5rem',
    padding: '.5rem',
    marginRight: '1.5rem',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',
    transform: 'scale(1.2)',
    [theme.breakpoints.down('md')]: {
      marginRight: '1rem',
      transform: 'scale(1)',
    },
  },
  icon: {
    color: theme.palette.common.white,
  },
  link: {
    fontSize: '1.1rem',
    fontWeight: '600',
    overflowWrap: 'anywhere',
  },
}));

function Employee({ params }) {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GetEmployee, {
    variables: { slug: params.slug },
  });

  const employee = data?.employees[0];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

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
                  paragraph
                  align="center"
                  className={classes.subtitle}
                >
                  {employee.position}
                </Typography>
                <Markdown content={employee.bio} />

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
                          {p.title}
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
                    employee.photo?.url
                      ? process.env.REACT_APP_IMAGE_URI + employee.photo?.url
                      : defaultProfileImage
                  }
                  alt={employee.photo?.alternativeText ?? 'Default Photo'}
                  className={classes.img}
                />
                {employee.email && (
                  <div className={classes.subitem}>
                    <div className={classes.iconContainer}>
                      <EmailOutlinedIcon className={classes.icon} />
                    </div>
                    <Typography
                      variant="body1"
                      className={classes.link}
                      component={Link}
                      href={`mailto:${employee.email}`}
                    >
                      {employee.email}
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

import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { Link as RouterLink } from 'react-router-dom';
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Link,
} from '@material-ui/core';
import Layout from '../../components/common/Layout';
import Loader from '../../components/common/Loader';

const GetSyllabiPage = loader('../../graphql/pages/student/GetSyllabiPage.gql');

const useStyles = makeStyles({
  root: {
    margin: '80px 0',
    boxShadow: '0px 14px 36px rgb(0 0 0 / 4%)',
    borderRadius: '1rem',
  },
  table: {
    minWidth: 600,
  },

  tableHeaderText: {
    fontWeight: 600,
  },
});

function Syllabus() {
  const styles = useStyles();
  const { loading, error, data } = useQuery(GetSyllabiPage);
  const page = data?.syllabuse;
  const syllabi = data?.syllabi;

  if (loading) return <Loader />;
  if (error) return <Redirect to="/error" />;
  return (
    <Layout title={page.title} subtitle={page.subtitle}>
      {syllabi?.length > 0 && (
        <TableContainer component={Paper} className={styles.root}>
          <Table className={styles.table} size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={styles.tableHeaderText}
                  >
                    Дисципліна
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={styles.tableHeaderText}
                  >
                    Викладач
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={styles.tableHeaderText}
                  >
                    Курс
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {syllabi.map((syllabus) => (
                <TableRow key={syllabus.id} hover>
                  <TableCell component="th" scope="row" align="left">
                    <Typography
                      variant="body1"
                      component={Link}
                      href={syllabus.link}
                    >
                      {syllabus?.discipline}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">
                      <Link
                        component={RouterLink}
                        to={`/about/staff/${syllabus?.employee?.slug}`}
                      >
                        {syllabus?.employee?.fullname}
                      </Link>
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">{syllabus?.year}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Layout>
  );
}

export default Syllabus;

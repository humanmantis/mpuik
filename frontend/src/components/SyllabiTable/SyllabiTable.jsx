import React from 'react';
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

const useStyles = makeStyles({
  root: {
    margin: '40px 0',
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

function SyllabiTable({ syllabi }) {
  const styles = useStyles();
  return (
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
            <TableRow key={syllabus.attributes.discipline} hover>
              <TableCell component="th" scope="row" align="left">
                <Typography
                  variant="body1"
                  component={Link}
                  href={syllabus.attributes.link}
                  target="_blank"
                >
                  {syllabus?.attributes.discipline}
                </Typography>
              </TableCell>
              <TableCell align="center">
                {!!syllabus?.attributes.employees.data?.length ? (
                  syllabus.attributes.employees.data.map((employee) => (
                    <Typography variant="body1" key={employee.attributes.slug}>
                      <Link
                        component={RouterLink}
                        to={`/about/staff/${employee.attributes.slug}`}
                      >
                        {employee.attributes.fullname}
                      </Link>
                    </Typography>
                  ))
                ) : (
                  <Typography variant="body1">
                    {syllabus.attributes.altemployee}
                  </Typography>
                )}
              </TableCell>
              <TableCell align="center">
                <Typography variant="body1">
                  {syllabus?.attributes.year}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SyllabiTable;

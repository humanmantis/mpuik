import React from 'react';
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from '@material-ui/core';
import Link from '../common/Link';

const useStyles = makeStyles({
  root: {
    margin: '40px 0',
    boxShadow: '0px 14px 36px rgb(0 0 0 / 4%)',
    borderRadius: '1rem'
  },
  table: {
    minWidth: 600
  },
  tableHeaderText: {
    fontWeight: 600
  }
});

function EduScienceTable({ programs }) {
  const styles = useStyles();
  return (
    <TableContainer component={Paper} className={styles.root}>
      <Table className={styles.table} size="medium">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1" align="center" className={styles.tableHeaderText}>
                Освітньо-професійна програма
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1" align="center" className={styles.tableHeaderText}>
                Рецензії
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1" align="center" className={styles.tableHeaderText}>
                Зворотний зв’язок
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {programs.map((program) => (
            <TableRow key={program.attributes.program} hover>
              <TableCell component="th" scope="row" align="left">
                <Typography variant="body1">
                  <Link
                    title={program?.attributes.program}
                    link={program.attributes.programlink}
                    target="_blank"
                  />
                </Typography>
              </TableCell>
              <TableCell align="center">
                {program.attributes.reviews?.map((review) => (
                  <Typography variant="body1" key={review.link}>
                    <Link title={review.title} link={review.link} target="_blank" />
                  </Typography>
                ))}
              </TableCell>
              <TableCell align="center">
                {program.attributes.feedbacks?.map((feedback) => (
                  <Typography variant="body1" key={feedback.link}>
                    <Link title={feedback.title} link={feedback.link} target="_blank" />
                  </Typography>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EduScienceTable;

import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import Link from '../shared/link/link';

function EduScienceTable({ programs }) {
  return (
    <TableContainer
      component={Paper}
      style={{
        margin: '40px 0',
        boxShadow: '0px 14px 36px rgb(0 0 0 / 4%)',
        borderRadius: '1rem',
      }}
    >
      <Table style={{ minWidth: 600 }} size="medium">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1" align="center" fontWeight="bold">
                Освітньо-професійна програма
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1" align="center" fontWeight="bold">
                Рецензії
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1" align="center" fontWeight="bold">
                Зворотний зв’язок
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {programs.map((program) => (
            <TableRow key={program.program} hover>
              <TableCell component="th" scope="row" align="left">
                <Typography variant="body1">
                  <Link to={program.programlink} target="_blank">
                    {program?.program}
                  </Link>
                </Typography>
              </TableCell>
              <TableCell align="center">
                {program.reviews?.map((review) => (
                  <Typography variant="body1" key={review.link}>
                    <Link to={review.link} target="_blank">
                      {review.title}
                    </Link>
                  </Typography>
                ))}
              </TableCell>
              <TableCell align="center">
                {program.feedbacks?.map((feedback) => (
                  <Typography variant="body1" key={feedback.link}>
                    <Link
                      title={feedback.title}
                      to={feedback.link}
                      target="_blank"
                    >
                      {feedback.title}
                    </Link>
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

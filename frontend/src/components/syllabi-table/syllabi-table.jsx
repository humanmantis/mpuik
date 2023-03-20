import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Link from '../shared/link/link';
import { FormControl, Toolbar } from '@mui/material';

function SyllabiTable({ syllabi }) {
  const [searchQuery, setSearchQuery] = useState('');
  const filterData = (query, syllabi) => {
    if (!query) {
      return syllabi;
    } else {
      const filter = new RegExp(query, 'gi');
      return syllabi
        .filter(
          (syllabus) =>
            syllabus.discipline.match(filter) ||
            syllabus.altemployee?.match(filter) ||
            syllabus.year?.match(filter) ||
            syllabus.employees?.some((emp) => emp.fullname.match(filter))
        )
        .sort((a, b) => b.order - a.order);
    }
  };

  const filteredSyllabi = filterData(searchQuery, syllabi);

  return (
    <Paper
      style={{
        margin: '40px 0',
        boxShadow: '0px 14px 36px rgb(0 0 0 / 4%)',
        borderRadius: '1rem',
      }}
    >
      <Toolbar>
        <FormControl fullWidth>
          <TextField
            id="search-bar"
            className="text"
            onChange={(event) => setSearchQuery(event.target.value)}
            label="Пошук"
            variant="outlined"
            placeholder="Назва дисципліни, викладач або курс"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Toolbar>
      <TableContainer>
        <Table style={{ minWidth: 600 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography
                  variant="subtitle1"
                  align="center"
                  fontWeight="bold"
                >
                  Дисципліна
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="subtitle1"
                  align="center"
                  fontWeight="bold"
                >
                  Викладач
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="subtitle1"
                  align="center"
                  fontWeight="bold"
                >
                  Курс
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSyllabi.map((syllabus) => (
              <TableRow key={syllabus.id} hover>
                <TableCell component="th" scope="row" align="left">
                  <Typography variant="body1">
                    <Link to={syllabus.link} target="_blank">
                      {syllabus?.discipline}
                    </Link>
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  {syllabus?.employees?.length > 0 ? (
                    syllabus.employees.map((employee) => (
                      <Typography variant="body1" key={employee.id}>
                        <Link to={`/about/staff/${employee.slug}`}>
                          {employee.fullname}
                        </Link>
                      </Typography>
                    ))
                  ) : (
                    <Typography variant="body1">
                      <Link to={syllabus.altemployeelink}>
                        {syllabus.altemployee}
                      </Link>
                    </Typography>
                  )}
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">{syllabus?.year}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default SyllabiTable;

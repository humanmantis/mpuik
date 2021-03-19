import { Grid, makeStyles, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import React from "react";
import Layout from "../../components/common/Layout";

const useStyles = makeStyles({
  root: {
    margin: '80px 0',
  },
 table: {
   minWidth: 600,
   background: '#FFFFFF',
  boxShadow: '0px 7px 25px rgba(143, 134, 196, 0.03)',
  borderRadius: 14,
 },
 link: {
   color: '#0D6F93',
 },
 tableHeaderText: {
  fontWeight: 600,
 },
 text: {
  fontSize: 18,
  lineHeight: '25px',
 }
});

const data = [
  {name: 'Назва дисципліни', teacher: 'піб', course: 'Курс'},
  {name: 'Назва дисципліни', teacher: 'піб', course: 'Курс'},
  {name: 'Назва дисципліни', teacher: 'піб', course: 'Курс'},
  {name: 'Назва дисципліни', teacher: 'піб', course: 'Курс'},
  {name: 'Назва дисципліни', teacher: 'піб', course: 'Курс'},
  {name: 'Назва дисципліни', teacher: 'піб', course: 'Курс'},
  {name: 'Назва дисципліни', teacher: 'піб', course: 'Курс'},
  {name: 'Назва дисципліни', teacher: 'піб', course: 'Курс'},
  {name: 'Назва дисципліни', teacher: 'піб', course: 'Курс'},
  {name: 'Назва дисципліни', teacher: 'піб', course: 'Курс'},
  {name: 'Назва дисципліни', teacher: 'піб', course: 'Курс'},
]

function Syllabus() {
  const styles = useStyles();
  return (
    <Layout
      title="Силабуси"
      subtitle="Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст"
    >
       <TableContainer component={Paper} className={styles.root}>
      <Table className={styles.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className={`${styles.text} ${styles.tableHeaderText}`}>Дисципліна</TableCell>
            <TableCell align="center" className={`${styles.text} ${styles.tableHeaderText}`}>Викладач</TableCell>
            <TableCell align="center" className={`${styles.text} ${styles.tableHeaderText}`}>Курс</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={`${row.name} ${index}`}>
              <TableCell component="th" scope="row" align="center" className={`${styles.link} ${styles.text}`}>
                {row.name}
              </TableCell>
              <TableCell align="center" className={`${styles.link} ${styles.text}`}>{row.teacher}</TableCell>
              <TableCell align="center" className={styles.text}>{row.course}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Layout>
  );
}

export default Syllabus;

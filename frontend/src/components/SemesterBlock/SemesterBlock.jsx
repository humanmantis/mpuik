import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { useStyles } from './semesterBlock.styles';

// const disciplines = [
//   { name: 'Дисципліна 1', link: 'https://google.com', isExam: true, cred: 3 }, 
//   { name: 'Дисципліна 2', link: 'https://google.com', isExam: true, cred: 3 },
//   { name: 'Дисципліна 3', link: 'https://google.com', isExam: true, cred: 3 }
// ];

const SemesterBlock = ({ semester, disciplines, formLink }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>{semester} семестр</Typography>
      <Box className={classes.gridWrapper}>
        {disciplines.map((discipline, index) => (
          <Grid container key={discipline.name}>
            <Grid xs={12} sm={4} item>
              <Typography className={classes.text}>{index + 1}.{' '} 
                <a href={discipline.link} target="_blank" rel="noreferrer" className={classes.link}>
                  {discipline.name}
                </a>
              </Typography>
            </Grid>
            <Grid xs={6} sm={4} item>
              <Typography align="center" className={classes.text}>
                {discipline.cred} кред
              </Typography>
            </Grid>
            <Grid xs={6} sm={4} item>
              <Typography align="center" className={classes.text}>
                {discipline.isExam ? 'Іспит' : 'Залік'}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
      <a href={formLink} target="_blank" rel="noreferrer" className={clsx(classes.link, classes.boldLink)}>
        Заповнити форму
      </a>
    </Box>
  );
};

export default SemesterBlock;

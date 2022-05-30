import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import Link from './../common/Link';

import { useStyles } from './semesterBlock.styles';

const SemesterBlock = ({ semester, silabusis, form }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>{semester}</Typography>
      <Box className={classes.gridWrapper}>
        {!!silabusis.length &&
          silabusis.map((silabus, index) => (
            <Grid container alignItems="center" key={silabus.attributes.discipline}>
              <Grid xs={6} sm={8} item>
                <Typography className={classes.text}>
                  {index + 1}.{' '}
                  <Link
                    title={silabus.attributes.discipline}
                    link={silabus.attributes.link}
                    target="_blank"
                  />
                </Typography>
              </Grid>
              <Grid xs={3} sm={2} item>
                <Typography align="center" className={classes.text}>
                  {silabus.attributes.credits} кред.
                </Typography>
              </Grid>
              <Grid xs={3} sm={2} item>
                <Typography align="center" className={classes.text}>
                  {silabus.attributes.isexam ? 'Іспит' : 'Залік'}
                </Typography>
              </Grid>
            </Grid>
          ))}
      </Box>
      <Typography className={classes.boldLink}>
        <Link
          title="Заповнити форму"
          link={form}
          target="_blank"
          className={classes.boldLink}
        />
      </Typography>
    </Box>
  );
};

export default SemesterBlock;

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '../link/link';
import './semester-block.scss';

const SemesterBlock = ({ semester, silabusis, form }) => {
  return (
    <Box className="semester-block">
      <Typography className="semester-block-title">{semester}</Typography>
      <Box className="semester-block-grid-wrapper">
        {silabusis?.length &&
          silabusis.map((silabus, index) => (
            <Grid container alignItems="center" key={silabus.discipline}>
              <Grid xs={6} sm={8} item>
                <Typography className="semester-block-text">
                  {index + 1}.{' '}
                  <Link to={silabus.link} target={silabus.target || '_blank'}>
                    {silabus.discipline}
                  </Link>
                </Typography>
              </Grid>
              <Grid xs={3} sm={2} item>
                <Typography align="center" className="semester-block-text">
                  {silabus.credits} кред.
                </Typography>
              </Grid>
              <Grid xs={3} sm={2} item>
                <Typography align="center" className="semester-block-text">
                  {silabus.isexam ? 'Іспит' : 'Залік'}
                </Typography>
              </Grid>
            </Grid>
          ))}
      </Box>
      {form && (
        <Typography className="semester-block-bold-link">
          <Link to={form} target="_blank" className="semester-block-bold-link">
            Заповнити форму
          </Link>
        </Typography>
      )}
    </Box>
  );
};

export default SemesterBlock;

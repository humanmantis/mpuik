import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import SemesterBlock from '../SemesterBlock';
import BlockTitle from '../common/BlockTitle';

const useStyles = makeStyles(() => ({
  section: {
    margin: '5rem 0'
  }
}));

function ElectiveDisciplinesBlock({ title, subtitle, semesters }) {
  const classes = useStyles();
  return (
    <section id={title?.split(' ').join('')} className={classes.section}>
      <BlockTitle title={title} subtitle={subtitle} />
      <Grid container spacing={3} justify="center">
        {semesters.map((semester) => (
          <Grid key={semester.id} item xs={12} sm={12} md={6}>
            <SemesterBlock
              semester={semester.semester}
              form={semester.form}
              silabusis={semester.silabusis.data}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default ElectiveDisciplinesBlock;

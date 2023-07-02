import React from 'react';
import Grid from '@mui/material/Grid';
import BlockTitle from '../shared/block-title/block-title';
import SemesterBlock from '../shared/semester-block/semester-block';

function ElectiveDisciplinesBlock({ title, subtitle, semesters = [] }) {
  console.log(semesters);
  return (
    <section id={title?.split(' ').join('')} style={{ margin: '5rem 0' }}>
      <BlockTitle title={title} subtitle={subtitle} />
      <Grid container spacing={3} justifyContent="center">
        {semesters.map((semester) => (
          <Grid key={semester.id} item xs={12} sm={12} md={6}>
            <SemesterBlock
              semester={semester.semester}
              form={semester.form}
              silabusis={semester.silabusis}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default ElectiveDisciplinesBlock;

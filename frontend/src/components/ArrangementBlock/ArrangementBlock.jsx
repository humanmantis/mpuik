import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { useStyles } from './arrangementBlock.styles';

// const obj = {
//   title: 'Онлайн-зустріч із представниками компанії',
//   img: "https://ain.ua/special/internal-education-ecosystem-solvd/images/tild6139-3339-4436-a263-363833663533__solvd_logo-1.png",
//   description: "Анонс курсів автоматизованого тестування та перспектив працевлаштування в компанії.",
//   date: "09.02.2022",
//   time: "15:00",
//   linkName: "Google meet",
//   link: "https://google.com",
//   detailsLink: "https://google.com"
// };

const ArrangementBlock = ({ 
  img, title, description, date, time, linkName, link, detailsLink 
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={3} className={classes.imgWrapper}>
        <img src={img} alt="arrangementImg" className={classes.img} />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={clsx(classes.text, classes.description)}>{description}</Typography>
        <Typography className={classes.text}>Дата: {date}</Typography>
        <Typography className={classes.text}>Час: {time}</Typography>
        <Typography className={classes.text}>Посилання:{' '}
          <a href={link} target="_blank" rel="noreferrer" className={classes.link}>{linkName}</a>
        </Typography>
        <a 
          href={detailsLink} 
          target="_blank" 
          rel="noreferrer" 
          className={clsx(classes.text, classes.link)}
        >
          Детальна інформація
        </a>
      </Grid>
    </Grid>
  );
};

export default ArrangementBlock;

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  sectionHeader: {
    margin: '0 auto',
    maxWidth: '800px',
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.info.main,
  },
  subtitle: {
    marginBottom: '2rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
}));

function BlockTitle({ title, subtitle }) {
  const classes = useStyles();
  return (
    <div className={classes.sectionHeader}>
      {title && (
        <Typography
          variant="h4"
          className={classes.title}
          align="center"
          gutterBottom
        >
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
          className={classes.subtitle}
          paragraph
        >
          {subtitle}
        </Typography>
      )}
    </div>
  );
}

BlockTitle.defaultProps = {
  subtitle: '',
};

BlockTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default BlockTitle;

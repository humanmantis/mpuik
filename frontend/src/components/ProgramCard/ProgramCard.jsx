import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Paper, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    borderRadius: '1rem',
    backgroundColor: theme.palette.common.white,
    boxShadow: '0px 7px 25px rgba(143, 134, 196, 0.03)',
    transition: '0.5s',
    '&:hover': {
      boxShadow: '0px 19px 33px rgba(143, 134, 196, 0.18)'
    }
  },
  cardHeader: {
    display: 'block',
    padding: '2rem',
    borderRadius: '1rem',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    transition: '0.5s',
    '&:hover': {
      color: theme.palette.info.main,
      backgroundColor: theme.palette.primary.light,
      textDecoration: 'none'
    }
  },
  boldText: {
    fontWeight: 'bold'
  },
  text: {
    fontWeight: 'normal'
  },
  cardBody: {
    padding: '2rem'
  },
  link: {
    display: 'block',
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: '1.5rem'
  }
}));

function ProgramCard({ slug, name, level, form, specialization, term, program, links }) {
  const classes = useStyles();

  return (
    <Paper className={classes.card}>
      <Link className={classes.cardHeader} component={RouterLink} to={`/entrant/programs/${slug}`}>
        <Typography variant="h5" className={classes.boldText}>
          {level} &mdash; {name} {form && `(${form})`}
        </Typography>
        <Typography variant="subtitle1" className={classes.boldText}>
          Освітня програма: <span className={classes.text}>{specialization}</span>
        </Typography>
        <Typography variant="subtitle1" className={classes.boldText}>
          Термін навчання: <span className={classes.text}>{term}</span>
        </Typography>
      </Link>
      <div className={classes.cardBody}>
        <Link className={classes.link} href={program} target="_blank">
          # Освітньо-професійна програма
        </Link>
        {!!links.length &&
          links.map((l) => (
            <Link
              key={l.title}
              className={classes.link}
              component={RouterLink}
              to={`/entrant/programs/${slug}#${l.title.split(' ').join('')}`}
            >
              # {l.title}
            </Link>
          ))}
      </div>
    </Paper>
  );
}

ProgramCard.defaultProps = {
  form: ''
};

ProgramCard.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  form: PropTypes.string,
  specialization: PropTypes.string.isRequired,
  term: PropTypes.string.isRequired,
  program: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ProgramCard;

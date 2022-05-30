import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Grid } from '@material-ui/core';
import Card from '../Card/Card';
import BlockTitle from '../common/BlockTitle';
import constants from '../../config/constants';

const useStyles = makeStyles((theme) => ({
  section: {
    margin: '5rem 0',
  },
  sectionHeader: {
    margin: '0 auto',
    maxWidth: '800px',
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  subtitle: {
    marginBottom: '2rem',
    fontWeight: 'bold',
    color: theme.palette.info.main,
  },
}));

function CardBlock({ title, subtitle, cards, variant }) {
  const classes = useStyles();
  const { cardType } = constants;
  const smSize =
    variant === cardType.big || variant === cardType.fullwidth ? 12 : 6;
  const mdSize =
    variant === cardType.fullwidth ? 12 : variant === cardType.big ? 6 : 4;
  return (
    <section id={title.split(' ').join('')} className={classes.section}>
      <BlockTitle title={title} subtitle={subtitle} />
      <Grid container spacing={3} justify="center">
        {cards.map((card, i) => (
          <Grid key={card.id} item xs={12} sm={smSize} md={mdSize}>
            <Card
              variant={variant}
              title={card.title}
              description={card.description}
              icon={card.icon.data}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

CardBlock.defaultProps = {
  subtitle: '',
};

CardBlock.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  variant: PropTypes.oneOf(['small', 'middle', 'big', 'fullwidth']),
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      icon: PropTypes.shape({
        data: PropTypes.shape({
          attributes: PropTypes.shape({
            hash: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            alternativeText: PropTypes.string.isRequired,
          }),
        }),
      }).isRequired,
    })
  ),
};

export default CardBlock;

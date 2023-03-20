import React from 'react';
import Grid from '@mui/material/Grid';

import constants from '../../config/constants';
import BlockTitle from '../shared/block-title/block-title';
import Card from '../card/card';

const { cardType } = constants;

function CardBlock({ title, subtitle, cards = [], variant = cardType.middle }) {
  const smSize =
    variant === cardType.big || variant === cardType.fullwidth ? 12 : 6;
  const mdSize =
    variant === cardType.fullwidth ? 12 : variant === cardType.big ? 6 : 4;

  if (variant === cardType.fullwidth) {
    cards = [...cards].reverse();
  }

  return (
    <section id={title?.split(' ').join('')} style={{ margin: '5rem 0' }}>
      <BlockTitle title={title} subtitle={subtitle} />
      <Grid container spacing={3} justifyContent="center">
        {cards.map((card) => (
          <Grid item key={card.id} xs={12} sm={smSize} md={mdSize}>
            <Card variant={variant} {...card} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default CardBlock;

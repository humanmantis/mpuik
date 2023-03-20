import React from 'react';
import constants from '../../config/constants';
import CardBig from './variants/card-big/card-big';
import CardFullwidth from './variants/card-fullwidth/card-fullwidth';
import CardMiddle from './variants/card-middle/card-middle';
import CardSmall from './variants/card-small/card-small';

const { cardType } = constants;

function Card({ variant = cardType.middle, ...props }) {
  switch (variant) {
    case cardType.small:
      return <CardSmall {...props} />;
    case cardType.middle:
      return <CardMiddle {...props} />;
    case cardType.big:
      return <CardBig {...props} />;
    case cardType.fullwidth:
      return <CardFullwidth {...props} />;
    default:
      return <CardMiddle {...props} />;
  }
}

export default Card;

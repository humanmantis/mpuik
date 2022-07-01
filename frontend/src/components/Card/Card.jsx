import React from 'react';
import PropTypes from 'prop-types';
import CardSmall from './CardSmall';
import CardMiddle from './CardMiddle';
import CardBig from './CardBig';
import ArrangementBlock from '../ArrangementBlock';
import constants from '../../config/constants';

function Card({ variant, title, description, icon }) {
  const { cardType } = constants;

  switch (variant) {
    case cardType.small:
      return <CardSmall title={title} description={description} icon={icon} />;
    case cardType.middle:
      return <CardMiddle title={title} description={description} icon={icon} />;
    case cardType.big:
      return <CardBig title={title} description={description} icon={icon} />;
    case cardType.fullwidth:
      return <ArrangementBlock title={title} description={description} icon={icon} />;
    default:
      return <CardMiddle title={title} description={description} icon={icon} />;
  }
}

Card.defaultProps = {
  variant: 'middle',
  description: ''
};

Card.propTypes = {
  variant: PropTypes.oneOf(['small', 'middle', 'big']),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.shape({
    attributes: PropTypes.shape({
      hash: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      alternativeText: PropTypes.string.isRequired
    })
  }).isRequired
};

export default Card;

import React from 'react';
import PropTypes from 'prop-types';
import { useScrollTrigger, Slide } from '@material-ui/core';

function HideOnScroll({ children, window }) {
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default HideOnScroll;

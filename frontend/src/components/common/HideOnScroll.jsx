import React from 'react';
import PropTypes from 'prop-types';
import { useScrollTrigger, Slide } from '@material-ui/core';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({
    target: document.querySelector('body'),
    disableHysteresis: true,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default HideOnScroll;

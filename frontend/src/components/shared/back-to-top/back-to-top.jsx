import React from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from './scroll-top';

function BackToTop() {
  return (
    <ScrollTop>
      <Fab color="primary" aria-label="Прокрутити до початку">
        <KeyboardArrowUp />
      </Fab>
    </ScrollTop>
  );
}

export default BackToTop;

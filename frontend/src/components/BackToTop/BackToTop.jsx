import React from 'react';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ScrollTop from './ScrollTop';

function BackToTop() {
  return (
    <ScrollTop>
      <Fab color="primary" aria-label="Прокрутити до початку">
        <KeyboardArrowUpIcon  />
      </Fab>
    </ScrollTop>
  );
}

export default BackToTop;

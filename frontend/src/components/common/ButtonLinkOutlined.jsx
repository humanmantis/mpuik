import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  button: {
    padding: '0.5rem 2rem',
    fontWeight: 'bold',
    borderRadius: '0.875rem'
  }
}));

function ButtonLinkOutlined({ title, path, icon }) {
  const classes = useStyles();
  const Icon = icon;
  return (
    <Button
      variant="outlined"
      color="primary"
      component={Link}
      to={path}
      className={classes.button}
      endIcon={icon && <Icon />}
    >
      {title}
    </Button>
  );
}

ButtonLinkOutlined.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.object
};

export default ButtonLinkOutlined;

import React from 'react';
import PropTypes from 'prop-types';
import { Link as MatLink } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function Link({ title, link, target }) {
  if (!link) return <>{title}</>;

  return link.includes('http') ? (
    <MatLink href={link} target={target}>
      {title}
    </MatLink>
  ) : (
    <MatLink component={NavLink} to={link} target={target}>
      {title}
    </MatLink>
  );
}

Link.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  target: PropTypes.string
};

export default Link;

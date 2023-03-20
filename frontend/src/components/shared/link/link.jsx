import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import MaterialLink from '@mui/material/Link';
import './link.scss';

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);
  const props = {
    ...(internal ? { to, activeClassName, partiallyActive } : { href: to }),
    ...other,
  };

  // Use Gatsby Link for internal links, and <a> for others
  return (
    <MaterialLink
      component={internal ? GatsbyLink : 'a'}
      className="link"
      underline="none"
      {...props}
    >
      {children}
    </MaterialLink>
  );
};

export default Link;

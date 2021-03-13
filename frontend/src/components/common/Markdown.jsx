import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'markdown-to-jsx';
import { Typography } from '@material-ui/core';

function Markdown({ content }) {
  return (
    <ReactMarkdown
      options={{
        overrides: {
          h1: {
            component: (props) => (
              <Typography variant="h1" gutterBottom {...props} />
            ),
          },
          h2: {
            component: (props) => (
              <Typography variant="h2" gutterBottom {...props} />
            ),
          },
          h3: {
            component: (props) => (
              <Typography variant="h3" gutterBottom {...props} />
            ),
          },
          h4: {
            component: (props) => (
              <Typography variant="h4" gutterBottom {...props} />
            ),
          },
          h5: {
            component: (props) => (
              <Typography variant="h5" gutterBottom {...props} />
            ),
          },
          h6: {
            component: (props) => (
              <Typography variant="h6" gutterBottom {...props} />
            ),
          },
          p: {
            component: (props) => (
              <Typography variant="body1" paragraph align="justify" {...props} />
            ),
          },
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

Markdown.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Markdown;

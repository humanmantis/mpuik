import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'markdown-to-jsx';
import { Typography, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  blockquote: {
    marginLeft: 0,
    paddingLeft: '1rem',
    borderLeft: `5px solid ${theme.palette.primary.main}`,
  },
}));

function Markdown({ content }) {
  const classes = useStyles();
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
              <Typography
                variant="body1"
                paragraph
                align="justify"
                {...props}
              />
            ),
          },
          li: {
            component: (props) => (
              <Typography
                variant="body1"
                align="justify"
                component="li"
                {...props}
              />
            ),
          },
          blockquote: {
            props: {
              className: classes.blockquote,
            },
          },
          a: {
            component: (props) => <Link {...props} />,
          },
          img: {
            component: (props) => (
              <img
                src={process.env.REACT_APP_IMAGE_URI + props.src}
                alt={props.alt}
              />
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

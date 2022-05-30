import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'markdown-to-jsx';
import { Typography, makeStyles } from '@material-ui/core';
import Link from './Link';

const useStyles = makeStyles((theme) => ({
  blockquote: {
    marginLeft: 0,
    paddingLeft: '1rem',
    borderLeft: `5px solid ${theme.palette.primary.main}`,
  },
  img: {
    display: 'block',
    margin: '0 auto',
    maxWidth: '100%',
  },
}));

function Markdown({ content, noMargin }) {
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
                paragraph={!noMargin}
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
            component: (props) => (
              <Link
                {...props}
                title={props.children[0]}
                link={props.href}
                target={props.target || "_blank"}
              />
            ),
          },
          img: {
            component: (props) => (
              <img src={props.src} alt={props.alt} className={classes.img} />
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
  noMargin: PropTypes.bool,
};

export default Markdown;

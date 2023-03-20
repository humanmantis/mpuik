import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Typography from '@mui/material/Typography';

import Link from '../shared/link/link';
import Image from '../image/image';

function Markdown({ content, noMargin }) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      children={content}
      skipHtml={false}
      components={{
        h1: (props) => <Typography variant="h1" gutterBottom {...props} />,
        h2: (props) => <Typography variant="h2" gutterBottom {...props} />,
        h3: (props) => <Typography variant="h3" gutterBottom {...props} />,
        h4: (props) => <Typography variant="h4" gutterBottom {...props} />,
        h5: (props) => <Typography variant="h5" gutterBottom {...props} />,
        h6: (props) => <Typography variant="h6" gutterBottom {...props} />,
        p: (props) => (
          <Typography paragraph={!noMargin} align="justify" {...props} />
        ),
        li: (props) => (
          <Typography
            variant="body1"
            align="justify"
            component="li"
            {...props}
          />
        ),
        blockquote: (props) => (
          <blockquote
            style={{
              marginLeft: 0,
              paddingLeft: '1rem',
              borderLeft: '5px solid #0d6f93',
            }}
            {...props}
          />
        ),
        a: (props) => (
          <Link {...props} to={props.href} target={props.target}>
            {props.children}
          </Link>
        ),
        img: (props) => (
          <Image
            url={props.src}
            alt={props.alt || props.src}
            localFile={{
              childImageSharp: {
                gatsbyImageData: {
                  backgroundColor: 'transparent',
                  layout: 'constrained',
                  width: props.presentationwidth,
                  height: props.presentationheight,
                  images: {
                    fallback: {
                      src: props.src,
                      srcSet: props.src,
                      sizes: props.sizes,
                    },
                    sources: [
                      {
                        src: props.src,
                        srcSet: props.src,
                        sizes: props.sizes,
                        type: props.srcSetType,
                      },
                    ],
                  },
                  placeholder: {
                    fallback: props.base64,
                  },
                },
              },
            }}
            objectFit="contain"
            className="markdown-image-container"
            imgWrapperClass="markdown-image"
            modal
          />
        ),
      }}
    />
  );
}

export default Markdown;

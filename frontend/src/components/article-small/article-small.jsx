import React from 'react';
import Grid from '@mui/material/Grid';
import Image from '../image/image';
import Markdown from '../markdown/markdown';
import BlockTitle from '../shared/block-title/block-title';
import './article-small.scss';

function ArticleSmall({ title, subtitle = '', content, photos = [] }) {
  return (
    <section id={title.split(' ').join('')} className="article-small-container">
      <BlockTitle title={title} subtitle={subtitle} />
      <Grid
        container
        component="article"
        alignContent="center"
        justify="space-between"
        spacing={3}
        className="article-small"
      >
        {!!photos?.length && (
          <Grid item xs={12} md={4} order={{ xs: 2, md: 1 }}>
            {photos.map((photo) => (
              <Image
                key={photo.url}
                src={photo.url}
                alt={photo.alternativeText}
                localFile={photo.localFile}
                objectFit="contain"
                imgWrapperClass="article-small-image"
                modal
              />
            ))}
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={photos?.length ? 8 : 12}
          order={{ xs: 1, md: 2 }}
        >
          <Markdown content={content.data.childMarkdownRemark.html} />
        </Grid>
      </Grid>
    </section>
  );
}

export default ArticleSmall;

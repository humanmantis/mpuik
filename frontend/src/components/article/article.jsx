import React from 'react';
import Grid from '@mui/material/Grid';
import BlockTitle from '../shared/block-title/block-title';
import Markdown from '../markdown/markdown';
import Image from '../image/image';
import './article.scss';

function Article({ title, subtitle, content, photos }) {
  const hasArticle = Boolean(content?.data?.childMarkdownRemark?.html);

  return (
    <section id={title} className={`article-container ${hasArticle ? '' : 'mb-2'}`}>
      <BlockTitle title={title} subtitle={subtitle} />
      {hasArticle && (
        <Grid
          container
          component="article"
          alignContent="center"
          justifyContent="space-between"
          spacing={photos?.length ? 3 : 0}
          className="article"
        >
          <Grid
            item
            xs={12}
            md={photos?.length ? 8 : 12}
            lg={photos?.length ? 7 : 12}
          >
            <Markdown content={content.data.childMarkdownRemark.html} />
          </Grid>
          {photos?.length > 0 && (
            <Grid item xs={12} md={4} lg={4}>
              {photos.map((photo) => (
                <Image
                  key={photo.id}
                  src={photo.url}
                  localFile={photo.localFile}
                  alt={photo.alternativeText}
                  objectFit="contain"
                  className="article-image-container"
                  imgWrapperClass="article-image"
                  modal
                />
              ))}
            </Grid>
          )}
        </Grid>
      )}
    </section>
  );
}

export default Article;

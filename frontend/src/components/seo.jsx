import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { mapSeo } from '../utils/map-seo';

function Seo({ pageSeo, location, children }) {
  const defaultSeo = useSiteMetadata();

  const seo = mapSeo(pageSeo, {
    ...defaultSeo,
    url: defaultSeo.siteUrl + location.pathname,
  });

  return (
    <>
      <title>
        {seo.title} {pageSeo.title && `| ${defaultSeo.title}`}{' '}
      </title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={seo.canonical} />
      <meta name="language" content="Ukrainian" />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      {seo.robots && <meta name="robots" content={seo.robots} />}
      {seo.viewport && <meta name="viewport" content={seo.viewport} />}

      {seo.social.map((social) =>
        social.socialNetwork.toLowerCase() === 'facebook' ? (
          <>
            <meta property="og:type" content="article" />
            <meta property="og:title" content={social.title} />
            <meta property="og:description" content={social.description} />
            <meta property="og:image" content={social.image} />
            <meta property="og:url" content={seo.canonical} />
            <meta property="og:site_name" content={seo.title} />
          </>
        ) : (
          <>
            <meta name="twitter:title" content={social.title} />
            <meta name="twitter:description" content={social.description} />
            <meta name="twitter:image" content={social.image} />
            <meta name="twitter:site" content={seo.canonical} />
          </>
        )
      )}

      {seo.structuredData && (
        <script type="application/ld+json">
          {seo.structuredData?.internal.content}
        </script>
      )}
      {children}
    </>
  );
}

export default Seo;

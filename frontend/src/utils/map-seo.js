export const mapSeo = (pageSeo, defaultSeo) => {
  pageSeo = pageSeo || {};
  const seo = {
    title: pageSeo.title || defaultSeo.title,
    description: pageSeo.description || defaultSeo.description,
    image: pageSeo.image?.localFile
      ? pageSeo.image.localFile.publicURL
      : pageSeo.image || defaultSeo.image,
    keywords: pageSeo.keywords,
    robots: pageSeo.robits,
    canonical: pageSeo.canonical || defaultSeo.url,
    social: pageSeo.social?.map((social) => ({
      socialNetwork: social.socialNetwork,
      title: social.title || defaultSeo.title,
      description: social.description || defaultSeo.description,
      image: social.image?.localFile
        ? social.image.localFile.publicURL
        : social.image || defaultSeo.image,
    })),
    structuredData: pageSeo.structuredData?.internal?.content,
  };

  if (seo.image && !seo.image.includes('http')) {
    seo.image = 'https://mpuik.vercel.app' + seo.image;
  }

  if (!seo.social) {
    seo.social = [
      {
        socialNetwork: 'Facebook',
        title: seo.title,
        description: seo.description,
        image: seo.image,
      },
      {
        socialNetwork: 'Twitter',
        title: seo.title,
        description: seo.description,
        image: seo.image,
      },
    ];
  }

  return seo;
};

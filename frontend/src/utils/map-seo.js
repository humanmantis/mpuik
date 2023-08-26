export const mapSeo = (pageSeo, defaultSeo) => {
  pageSeo = pageSeo || {};
  const seo = {
    title: pageSeo.title || defaultSeo.title,
    description: pageSeo.description || defaultSeo.description,
    image: getImageLink(pageSeo.image),
    keywords: pageSeo.keywords,
    robots: pageSeo.robits,
    canonical: pageSeo.canonical || defaultSeo.url,
    social: pageSeo.social?.map((social) => ({
      socialNetwork: social.socialNetwork,
      title: social.title || defaultSeo.title,
      description: social.description || defaultSeo.description,
      image: getImageLink(social.image),
    })),
    structuredData: pageSeo.structuredData
  };

  if (!seo.social.length) {
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

  function getImageLink(image) {
    const resultImage = image?.localFile
      ? image.localFile.publicURL
      : image || defaultSeo.image;

    if (!resultImage) {
      return null;
    }

    return resultImage.includes('http')
      ? resultImage
      : 'https://mpuik.vercel.app' + resultImage;
  }
};

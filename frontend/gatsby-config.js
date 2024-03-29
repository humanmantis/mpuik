/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Кафедра МПУіК`,
    siteUrl: `https://mpuik.vercel.app/`,
    description:
      "Кафедра МПУіК навчає студентів з 1972 року. Спеціальність: 122 - Комп'ютерні науки. Алгоритмічне та програмне забезпечення комп'ютерних систем",
    image: './static/images/logo.png',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-leaflet',
    'gatsby-awesome-pagination',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-purgecss',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GATSBY_GOOGLE_ANALYTICS_ID],
        pluginConfig: {
          head: true,
        }
      },
    },
    {
      resolve: 'gatsby-plugin-schema-snapshot',
      options: {
        path: './schema.gql',
        update: false,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images-anywhere',
            options: {
              tracedSVG: true,
              backgroundColor: 'transparent',
              quality: 85,
              createMarkup: ({
                presentationWidth,
                presentationHeight,
                src,
                sizes,
                srcSetType,
                base64,
                alt,
              }) => {
                return `<img presentationWidth="${presentationWidth}"
                          presentationHeight="${presentationHeight}" 
                          src="${src}"
                          sizes="${sizes}"
                          srcSetType="${srcSetType}"
                          base64="${base64}"
                          alt="${alt}"
                        />`;
              },
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          placeholder: 'none',
          backgroundColor: '#e0e0e0',
          breakpoints: [600, 960, 1280, 1920],
          quality: 85,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './static/images/logo.png',
        name: 'Кафедра Математичних проблем управління і кібернетики',
        description:
          "Кафедра МПУіК навчає студентів з 1972 року. Спеціальність: 122 - Комп'ютерні науки. Алгоритмічне та програмне забезпечення комп'ютерних систем",
        short_name: `МПУіК`,
        start_url: `/`,
        background_color: '#f9f9fa',
        theme_color: '#bcd8e4',
        display: `standalone`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
        maxParallelRequests: 1,
        collectionTypes: [
          { singularName: 'post', queryLimit: 10, queryParams: { populate: 'deep' } },
          { singularName: 'employee', queryLimit: 10, queryParams: { populate: 'deep' } },
          { singularName: 'page', queryLimit: 10, queryParams: { populate: 'deep' } },
          { singularName: 'program', queryLimit: 10, queryParams: { populate: 'deep' } },
          { singularName: 'syllabus', queryLimit: 10, queryParams: { populate: 'deep' } },
          { singularName: 'category', queryLimit: 10, queryParams: { populate: 'deep' } },
          {
            singularName: 'edu-science-program',
            queryLimit: 10,
            queryParams: { populate: 'deep' },
          },
          { singularName: 'location', queryParams: { populate: 'deep' } },
        ],
        singleTypes: [
          { singularName: 'home', queryParams: { populate: 'deep' } },
          { singularName: 'footer', queryParams: { populate: 'deep' } },
        ],
        locale: 'uk',
      },
      __key: 'strapi',
    },
    {
      resolve: `gatsby-source-menus-strapi-plugin`,
      options: {
        apiURL: process.env.STRAPI_API_URL,
        menusEndpoint: `menus`,
        nested: true,
        menuID: '1',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'uk'
      }
    },
  ],
};

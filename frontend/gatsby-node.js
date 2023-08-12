const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async (context) => {
  await createPagesFromMenu(context);
  await createNewsPages(context);
  await createRedirects(context);
};

const createPagesFromMenu = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Query for markdown nodes to use in creating pages.
  const pages = await graphql(`
    {
      allStrapiMenus {
        nodes {
          attributes {
            title
            url
            children {
              data {
                attributes {
                  title
                  url
                  children {
                    data {
                      attributes {
                        title
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (pages.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create pages for each markdown file.
  const pageTemplate = path.resolve(`src/templates/page/page.js`);
  const pathsToIgnore = [
    '/staff',
    '/history',
    '/news',
    '/educational-scientific-programs',
    '/syllabi',
    '/contacts',
    '/404',
  ];
  pages.data.allStrapiMenus.nodes.forEach((node) => {
    function createPages(node, parentPath = '') {
      const path = node.attributes.url;
      const currentPath = parentPath ? `${parentPath}${path}` : path;

      if (node.attributes.children?.data.length) {
        node.attributes.children.data.forEach((data) => {
          createPages(data, currentPath);
        });
      } else {
        if (
          pathsToIgnore.includes(path) ||
          path.includes('http') ||
          currentPath === '/'
        ) {
          return;
        }

        createPage({
          path: currentPath,
          component: pageTemplate,
          context: {
            slug:
              path.substring(1) ||
              currentPath.substring(1, currentPath.length - 1),
          },
        });
      }
    }

    createPages(node);
  });
};

const createRedirects = async ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/news/no-category`,
    toPath: `/news/page`,
    isPermanent: true
  });


  createRedirect({
    fromPath: `/news/page`,
    toPath: `/news`,
    isPermanent: true
  });

  const redirects = require('./redirects.json')

  redirects.forEach(redirect =>
    createRedirect({
      fromPath: redirect.fromPath,
      toPath: redirect.toPath,
      isPermanent: true
    })
  )
};

const createNewsPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Fetch news
  const news = await graphql(`
    {
      allStrapiPost(sort: { order: DESC }) {
        nodes {
          id
          slug
          title
          category {
            name
            slug
          }
        }
      }
    }
  `);

  // Handle errors
  if (news.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create paginated news pages
  const newsItems = news.data.allStrapiPost.nodes;
  paginate({
    createPage,
    items: newsItems,
    itemsPerFirstPage: 9,
    itemsPerPage: 15,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? '/news' : `/news/page`),
    component: path.resolve(`src/templates/news/news.js`),
  });

  // Create paginated categoty pages
  const newsByCategory = newsItems.reduce((acc, item) => {
    let category = item.category?.slug;
    if (!category) {
      category = 'no-category';
    }

    if (!acc[category]) {
      acc[category] = {
        category: item.category || { slug: 'no-category' },
        items: [],
      };
    }

    acc[category].items.push(item);

    return acc;
  }, {});

  Object.entries(newsByCategory).forEach(([key, category]) => {
    key !== 'no-category' &&
      paginate({
        createPage,
        items: category.items,
        itemsPerPage: 15,
        pathPrefix: `/news/${category.category.slug}`,
        component: path.resolve(`src/templates/news/news.js`),
        context: {
          categorySlug: category.category.slug,
          category: category.category,
        },
      });
  });

  Object.values(newsByCategory).forEach((category) => {
    category.items?.map((item) =>
      createPage({
        path: `/news/${category.category.slug}/${item.slug}`,
        component: path.resolve(`src/templates/news-details/news-details.js`),
        context: {
          slug: item.slug,
        },
      })
    );
  });
};

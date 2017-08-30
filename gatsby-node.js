const pathResolver = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const articleTemplate = pathResolver.resolve('src/templates/article.js');
    const eventTemplate = pathResolver.resolve('src/templates/event.js');

    resolve(
      graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                category
                path
              }
            }
          }
        }
      }
    `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const edges = result.data.allMarkdownRemark.edges;
        const pages = edges.map(edge => edge.node.frontmatter);

        const articles = pages.filter(page => page.category === 'articles');
        const events = pages.filter(page => page.category === 'events');

        articles.forEach(article => {
          createPage({
            path: article.path,
            component: articleTemplate,
            context: {
              slug: article.path,
            },
          });
        });

        events.forEach(event => {
          createPage({
            path: event.path,
            component: eventTemplate,
            context: {
              slug: event.path,
            },
          });
        });
      }),
    );
  });
};

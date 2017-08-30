export const eventsQuery = `
  allMarkdownRemark {
    edges {
      node {
        html
        frontmatter {
          attendLink
          category
          date
          featured
          hosts
          intro
          title
          path
          venue {
            name
          }
        }
      }
    }
  }
`;

export const eventQuery = `
  markdownRemark(path: { eq: $path }) {
    html
    frontmatter {
      attendLink
      category
      date
      featured
      hosts
      intro
      title
      path
      venue {
        name
      }
    }
  }
`;

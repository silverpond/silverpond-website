// @flow
// Imports - config
import React from 'react';
import { prefixLink } from 'gatsby-helpers';

// Imports - components
import Helmet from 'react-helmet';

// Component
const Redirect = (
  {
    route: {
      page: {
        data: {
          title,
          redirectTo,
        },
      },
    },
  }: {
    route: {
      page: {
        data: {
          title: string,
          redirectTo: string,
        },
      },
    },
  },
) => {
  return (
    <Helmet
      title={title}
      meta={[{ name: 'refresh', content: `0; url=${redirectTo}` }]}
      script={[{ innerHTML: `window.location='${prefixLink(redirectTo)}';` }]}
    />
  );
};

export default Redirect;

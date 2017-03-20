// @flow
// Imports - config
import React from 'react';
import { prefixLink } from 'gatsby-helpers';

// Imports - components
import Helmet from 'react-helmet';

// Component
const Redirect = ({
    route: {
      pages,
      page: {
        path,
        data: { title, redirect_to },
      },
    },
  }) => {
  return (
      <Helmet title={title}
              meta={[{name: "refresh", content: `0; url=${redirect_to}`}]}
              script={[{innerHTML: `window.location='${redirect_to}';`}]}
      />
  );
};

export default Redirect;
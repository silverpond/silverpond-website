// @flow
// Imports - config
import React from 'react';

import Article from 'components/Article';
import Event from 'components/Event';

const getPostType = (path: string): string => {
  return path.split('/')[1];
};

// Component
const MarkdownWrapper = (props: Object) => {
  switch (getPostType(props.route.page.path)) {
    case 'articles':
      return <Article {...props} />;
    case 'events':
      return <Event {...props} />;
    default:
      return <Article {...props} />;
  }
};

export default MarkdownWrapper;

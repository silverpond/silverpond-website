// @flow
// Imports - config
import React from 'react';

import Article from '../components/Article';
import Event from '../components/Event';
import Redirect from '../components/Redirect';

const getPostType = (path: string): string => {
  return path.split('/')[1];
};

// Component
const MarkdownWrapper = (props: Object) => {

  if(/^redirects/.test(props.route.page.requirePath)) {
    return <Redirect {...props} />;
  }
  
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
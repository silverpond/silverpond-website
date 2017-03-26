// @flow
// Imports - config
import React from 'react';
import Helmet from 'react-helmet';

const robotsMeta = draft => {
  if (draft) {
    return { name: 'robots', content: 'noindex, nofollow' };
  }
  return {};
};

// Component
const PostMeta = (
  {
    title,
    draft,
  }: {
    title: string,
    draft?: boolean,
  },
) => {
  return <Helmet title={title} meta={[robotsMeta(draft)]} />;
};

export default PostMeta;

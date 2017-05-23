// @flow
// Imports - config
import React from 'react';
import Helmet from 'components/Helmet';
import type { MetaTag } from 'lib/type-defs';

const robotsMeta = (draft?: boolean): MetaTag => {
  if (draft) {
    return { name: 'robots', content: 'noindex, nofollow' };
  }
  return {};
};

// Component
const PostMeta = ({ title, draft }: { title: string, draft?: boolean }) => {
  return <Helmet title={title} meta={[robotsMeta(draft)]} />;
};

export default PostMeta;

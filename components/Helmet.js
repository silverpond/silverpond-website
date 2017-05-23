// @flow
// Imports - config
import React from 'react';
import BaseHelmet from 'react-helmet';
import type MetaTag from 'lib/type-defs';

// Component
const Helmet = (
  {
    title,
    meta,
  }: {
    title: string,
    meta?: MetaTag[],
  },
) => {
  return <BaseHelmet title={`Silverpond | ${title}`} meta={meta} />;
};

export default Helmet;

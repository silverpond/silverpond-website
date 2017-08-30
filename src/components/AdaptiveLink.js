// @flow
// Imports - config
import React from 'react';
import Link from 'gatsby-link';

// Component
const AdaptiveLink = ({
  children,
  to,
  ...props
}: {
  children?: React.Element<any>,
  to: string,
  props: Object,
}) => {
  return !!to && (to.includes('http') || to.includes('mailto')) ? (
    <a href={to} {...props}>
      {children}
    </a>
  ) : (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
};

export default AdaptiveLink;

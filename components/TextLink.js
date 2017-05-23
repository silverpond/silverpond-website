// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { linkUnderline } from 'lib/styles';

import AdaptiveLink from 'components/AdaptiveLink';

const Link = styled(AdaptiveLink)`
  ${linkUnderline}
`;

// Component
const TextLink = (
  {
    children,
    ...props
  }: {
    children?: React.Element<any>,
  },
) => {
  return (
    <Link {...props}>
      {children}
    </Link>
  );
};

export default TextLink;

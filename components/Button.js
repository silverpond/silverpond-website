// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { palette } from '../lib/settings';

import AdaptiveLink from '../components/AdaptiveLink';

type Color = 'blue' | 'white';

const getBackgroundColor = (color: Color): string => {
  switch (color) {
    case 'white':
      return 'white';
    case 'blue':
      return palette.blue.base;
    default:
      return palette.blue.base;
  }
};

const styles = (props: Object): string => {
  return `
  background-color: ${getBackgroundColor(props.color)};
  border-radius: 3px;
  border: none;
  color: white;
  display: inline-block;
  height: 3.5rem;
  line-height: 3.5rem;
  min-width: 8rem;
  padding: 0 2rem;
  `;
};

const Button = styled.button`
  ${styles}
`;

const Link = styled(AdaptiveLink)`
  ${styles}
`;

// Component
const Component = (
  props: {
    children: React.Element<any>,
    to: string,
  },
) => {
  if (props.to) {
    return <Link {...props}>{props.children}</Link>;
  }
  return <Button {...props}>{props.children}</Button>;
};

export default Component;

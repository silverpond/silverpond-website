// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { palette, type } from '../lib/settings';

import AdaptiveLink from '../components/AdaptiveLink';
import ArrowIcon from '../components/ArrowIcon';

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

const getSize = size => {
  switch (size) {
    case 'small':
      return `
        height: 3rem;
        line-height: 3rem;
      `;
    default:
      return `
        height: 3.5rem;
        line-height: 3.5rem;
      `;
  }
};

const styles = (props: Object): string => {
  return `
  ${getSize(props.size)}
  background-color: ${getBackgroundColor(props.color)};
  border-radius: 3px;
  border: none;
  box-shadow: 0 3px 7px rgba(0, 0, 0, .2);
  color: white;
  display: inline-block;
  font-weight: ${type.weights.medium};
  min-width: 8rem;
  padding: 0 2rem;
  text-align: center;
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
    children?: React.Element<any>,
    to?: string,
    hasArrow?: boolean,
    size?: string,
  },
) => {
  const { hasArrow, children, ...rest } = props;
  const buttonContent = (
    <span>
      {children}
      {hasArrow && <ArrowIcon fill="white" style={{ marginLeft: '1rem' }} />}
    </span>
  );
  if (props.to) {
    return <Link {...rest}>{buttonContent}</Link>;
  }
  return <Button {...rest}>{buttonContent}</Button>;
};

export default Component;

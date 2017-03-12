// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { palette, type, typeStyles } from '../lib/settings';

import AdaptiveLink from '../components/AdaptiveLink';
import ArrowIcon from '../components/ArrowIcon';

type Color = 'blue' | 'white';
type Size = 'small' | 'medium' | 'large';

const ColorStyles = (color: Color): string => {
  switch (color) {
    case 'white':
      return `
        background: white;
        color: ${palette.slate.base};
        fill: ${palette.slate.base};
      `;
    case 'blue':
      return `
        background: ${palette.blue.base};
        color: white;
        fill: white;
      `;
    default:
      return `
        background: ${palette.blue.base};
        color: white;
        fill: white;
      `;
  }
};

const sizeStyles = (size: Size): string => {
  switch (size) {
    case 'small':
      return `
        height: 3rem;
        line-height: 3rem;
        padding: 0 2rem;
      `;
    case 'large':
      return `
        ${typeStyles('h4')}
        font-weight: ${type.weights.bold};
        height: 4.5rem;
        line-height: 4.5rem;
        padding: 0 4.5rem;
      `;
    default:
      return `
        height: 3.5rem;
        line-height: 3.5rem;
        padding: 0 2rem;
      `;
  }
};

const styles = (props: Object): string => {
  return `
  ${ColorStyles(props.color)}
  ${sizeStyles(props.size)}
  border-radius: 3px;
  border: none;
  box-shadow: 0 3px 7px rgba(0, 0, 0, .2);
  cursor: pointer;
  display: inline-block;
  font-weight: ${type.weights.medium};
  min-width: 8rem;
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
      {hasArrow && <ArrowIcon style={{ marginLeft: '1rem' }} />}
    </span>
  );
  if (props.to) {
    return <Link {...rest}>{buttonContent}</Link>;
  }
  return <Button {...rest}>{buttonContent}</Button>;
};

export default Component;

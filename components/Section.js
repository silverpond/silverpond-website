// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { palette } from '../lib/settings';

// Imports - components
import Inner from '../components/Inner';

type Color = 'red' | 'grey';

const getBackgroundColor = (color: string): string => {
  switch (color) {
    case 'red':
      return palette.red.base;
    case 'grey':
      return palette.grey.lighter;
    default:
      return 'white';
  }
};

const Container = styled.div`
  background-color: ${props => getBackgroundColor(props.color)};
  padding: 6rem;
`;

// Component
const Section = (
  {
    children,
    color,
  }: {
    children?: React.Element<any>,
    color?: Color,
  },
) => {
  return (
    <Container color={color}>
      <Inner>
        {children}
      </Inner>
    </Container>
  );
};

export default Section;

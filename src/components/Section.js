// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

import { breakpoints, palette } from 'lib/settings';
import { centerContent, angledAccent } from 'lib/styles';
import type { SectionColor, SectionSize } from 'lib/type-defs';

// Imports - components
import Inner from 'components/Inner';

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
  ${props => angledAccent(getBackgroundColor(props.color))} background-color: ${props =>
      getBackgroundColor(props.color)};
  padding: 1rem;

  @media (min-width: ${breakpoints.small}) {
    padding: 2rem;
  }

  @media (min-width: ${breakpoints.medium}) {
    padding: 6rem;
  }
`;

const Content = styled(Inner)`
  ${props => {
    if (props.centeredContent) {
      return centerContent;
    }
    return null;
  }};
`;

// Component
const Section = ({
  centeredContent,
  children,
  color,
  size,
  style,
}: {
  centeredContent?: boolean,
  children?: React.Element<any>,
  color?: SectionColor,
  size?: SectionSize,
  style?: Object,
}) => {
  return (
    <Container color={color} style={style}>
      <Content size={size} centeredContent={centeredContent}>
        {children}
      </Content>
    </Container>
  );
};

export default Section;

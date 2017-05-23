// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { palette, type } from 'lib/settings';
import { media } from 'lib/styles';

// Imports - components
import Section from 'components/Section';
import ArrowLink from 'components/ArrowLink';

type Color = 'red' | 'grey';

const getTitleColor = (color: string): string => {
  switch (color) {
    case 'red':
      return palette.red.light;
    case 'grey':
      return palette.grey.base;
    default:
      return palette.grey.light;
  }
};

// Styled components
const Head = styled.div`
  align-items: baseline;
  display: flex;
  margin-bottom: 3rem;

  ${media.small`
    display: block;
  `}
`;

const Title = styled.h3`
  color: ${props => getTitleColor(props.color)};
  font-size: 7rem;
  font-weight: ${type.weights.bold};
  line-height: 7rem;
  margin: 0 2rem 0 -6rem;
  text-transform: uppercase;

  ${media.small`
    font-size: 5rem;
    line-height: 5rem;
    margin-left: 0;
    margin-right: 0;
  `}
`;

// Component
const PromotedContent = (
  {
    category,
    children,
    color,
    to,
  }: {
    category: string,
    children?: React.Element<any>,
    color?: Color,
    to: string,
  },
) => {
  return (
    <Section color={color}>
      <Head>
        <Title color={color}>
          {category}
        </Title>
        <ArrowLink to={to} fancytext>
          more {category}
        </ArrowLink>
      </Head>
      {children}
    </Section>
  );
};

export default PromotedContent;

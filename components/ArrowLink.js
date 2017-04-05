// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { linkUnderline } from '../lib/styles';
import { media } from '../lib/style-utils';

import { Link } from 'react-router';
import ArrowIcon from '../components/ArrowIcon';

const LinkText = styled.span`
  ${linkUnderline}
  margin-right: 2rem;
`;

const FancyText = styled.span`
  font-family: georgia;
  font-style: italic;
  margin-right: 2rem;
`;

const ArrowIconWrapper = styled.span`
  ${ media.extrasmall`
    display: flex;
    padding-bottom: 2rem;
  `}
`;

// Component
const ArrowLink = (
  {
    children,
    fancytext,
    to,
  }: {
    children?: React.Element<any>,
    downcase?: boolean,
    fancytext?: boolean,
    to: string,
  },
) => {
  return (
    <Link to={to}>
      {fancytext
        ? <FancyText>{children}</FancyText>
        : <LinkText>{children}</LinkText>}
        <ArrowIconWrapper>
          <ArrowIcon />
        </ArrowIconWrapper>
    </Link>
  );
};

export default ArrowLink;

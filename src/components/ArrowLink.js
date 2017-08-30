// @flow
// Imports - config
import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { linkUnderline } from 'lib/styles';

import ArrowIcon from 'components/ArrowIcon';

const LinkText = styled.span`${linkUnderline} margin-right: 2rem;`;

const FancyText = styled.span`
  font-family: georgia;
  font-style: italic;
  margin-right: 2rem;
`;

// Component
const ArrowLink = ({
  children,
  fancytext,
  to,
}: {
  children?: React.Element<any>,
  downcase?: boolean,
  fancytext?: boolean,
  to: string,
}) => {
  return (
    <Link to={to}>
      {fancytext ? <FancyText>{children}</FancyText> : <LinkText>{children}</LinkText>}
      <ArrowIcon />
    </Link>
  );
};

export default ArrowLink;

// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { prefixLink } from 'gatsby-helpers';
import { palette } from 'lib/settings';
import { media } from 'lib/styles';
import type RuleSet from 'lib/type-defs';

import MobileNav from 'components/MobileNav';
import Nav from 'components/Nav';
import LogoLink from 'components/LogoLink';

const Container = styled.div`
  align-items: center;
  border-bottom: solid .25rem ${palette.red.base};
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
  ${props => props.styleString}

  ${media.small`
    display: block;
    padding: 2rem 0;
  `}
`;

const Logo = styled(LogoLink)`
  margin-right: 2rem;

  ${media.small`
    margin: 0 2rem 1rem 2rem;
  `}
`;

// Component
const Header = ({
  onDark,
  styleString,
}: {
  onDark?: boolean,
  styleString?: RuleSet,
}) => {
  return (
    <Container styleString={styleString}>
      <Logo to={prefixLink('/')} onDark={onDark} />
      <Nav />
      <MobileNav />
    </Container>
  );
};

export default Header;

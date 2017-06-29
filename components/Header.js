// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { prefixLink } from 'gatsby-helpers';
import { palette } from 'lib/settings';
import { media } from 'lib/styles';
import type { RuleSet } from 'lib/type-defs';

import LogoLink from 'components/LogoLink';
import MobileNav from 'components/MobileNav';
import Nav from 'components/Nav';

const Container = styled.div`
  align-items: center;
  border-bottom: solid .25rem ${palette.red.base};
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
  ${props => props.styleString}

  ${media.small`
    align-items: flex-start;
    padding-left: 2rem;
    padding-right: 2rem;
  `}
`;

const Logo = styled(LogoLink)`
  margin-right: 2rem;
`;

const navStyles = `
  @media (max-width: 1050px) {
    display: none;
  }
`;

const mobileNavStyles = `
  @media (min-width: 1050px) {
    display: none;
  }
`;

// Component
const Header = ({
  dark,
  styleString,
}: {
  dark?: boolean,
  styleString?: RuleSet,
}) => {
  return (
    <Container styleString={styleString}>
      <Logo to={prefixLink('/')} dark={dark} />
      <Nav styleString={navStyles} />
      <MobileNav styleString={mobileNavStyles} dark={dark} />
    </Container>
  );
};

export default Header;

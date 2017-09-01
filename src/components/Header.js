// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

import { breakpoints } from 'lib/settings';

import Nav from 'components/Nav';
import LogoLink from 'components/LogoLink';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 2rem 3rem;
  position: absolute;
  width: 100%;
  z-index: 1;

  @media (min-width: ${breakpoints.small}) {
    justify-content: space-between;
  }
`;

// Component
const Header = ({ onDark, style }: { onDark?: boolean, style?: Object }) => {
  return (
    <Container style={style}>
      <LogoLink to="/" onDark={onDark} />
      <Nav />
    </Container>
  );
};

export default Header;

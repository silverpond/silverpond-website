// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

import { breakpoints } from 'lib/settings';

import Nav from 'components/Nav';
import LogoLink from 'components/LogoLink';

const Container = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  z-index: 1;

  @media (min-width: ${breakpoints.small}) {
    left: 50%;
    margin: 0 auto;
    max-width: ${breakpoints.large};
    transform: translateX(-50%);
  }
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 2rem 3rem;
  position: relative;
  width: 100%;

  @media (min-width: ${breakpoints.small}) {
    justify-content: space-between;
  }
`;

// Component
const Header = ({ onDark, style }: { onDark?: boolean, style?: Object }) => {
  return (
    <Container style={style}>
      <Content>
        <LogoLink to="/" onDark={onDark} />
        <Nav />
      </Content>
    </Container>
  );
};

export default Header;

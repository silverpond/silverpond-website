// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { prefixLink } from 'gatsby-helpers';

import Nav from '../components/Nav';
import LogoLink from '../components/LogoLink';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 3rem;
`;

// Component
const Header = (
  {
    onDark,
    style,
  }: {
    onDark?: boolean,
    style?: Object,
  },
) => {
  return (
    <Container style={style}>
      <LogoLink to={prefixLink('/')} onDark={onDark} />
      <Nav />
    </Container>
  );
};

export default Header;

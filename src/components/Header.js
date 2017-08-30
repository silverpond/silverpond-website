// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

import { palette } from 'lib/settings';

import Nav from 'components/Nav';
import LogoLink from 'components/LogoLink';

const Container = styled.div`
  align-items: center;
  border-bottom: solid 0.25rem ${palette.red.base};
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
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

// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

import Nav from 'components/Nav';
import LogoLink from 'components/LogoLink';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 2rem 3rem;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const floatStyle = { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 };

// Component
const Header = ({
  floating,
  onDark,
  style,
}: {
  floating?: boolean,
  onDark?: boolean,
  style?: Object,
}) => {
  const mergedStyles = floating ? { ...floatStyle, style } : style;
  return (
    <Container style={mergedStyles}>
      <LogoLink to="/" onDark={onDark} />
      <Nav />
    </Container>
  );
};

export default Header;

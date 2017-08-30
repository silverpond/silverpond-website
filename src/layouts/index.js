// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer';

import 'normalize.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`flex-grow: 1;`;

// Component
const Template = ({ children }: { children: React.Element<any> }) => {
  return (
    <Container>
      <MainContent>{children()}</MainContent>
      <Footer />
    </Container>
  );
};

export default Template;

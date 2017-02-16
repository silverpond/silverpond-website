// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer';

import 'normalize.css';

const Header = styled.div`
  display: none;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

// Component
const Template = (
  {
    children,
    location,
  }: {
    children: React.Element<any>,
    location: string,
  },
) => {
  return (
    <div>
      <Header>
        header
      </Header>
      <div>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Template;

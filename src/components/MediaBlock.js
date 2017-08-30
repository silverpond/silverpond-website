// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Aside = styled.div`
  flex-shrink: 0;
  margin-right: 4rem;
  width: 180px;
`;

const Main = styled.div`

`;

// Component
const MediaBlock = (
  {
    aside,
    children,
  }: {
    aside: any,
    children?: React.Element<any>,
  },
) => {
  return (
    <Container>
      <Aside>
        {aside}
      </Aside>
      <Main>
        {children}
      </Main>
    </Container>
  );
};

export default MediaBlock;

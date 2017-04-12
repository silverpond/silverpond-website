// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { media } from 'lib/styles';

const Container = styled.div`
  display: flex;

  ${media.small`
    flex-direction: column;
  `}
`;

const Aside = styled.div`
  flex-shrink: 0;
  margin-right: 4rem;
  width: 180px;

  ${media.small`
    margin-bottom: 0;
    margin-right: 0;
    width: auto;
  `}
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

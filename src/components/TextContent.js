// @flow
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  a > span {
    margin: 2rem 0;
  }

  img {
    margin: 1rem 0;
  }

  p {
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  span {
    margin-bottom: 1rem;
  }

  ul {
    list-style: disc;
    margin-bottom: 1rem;
    padding-left: 2rem;
  }
`;

const TextContent = ({ children }: Object) => {
  return <Container>{children}</Container>;
};

export default TextContent;

// @flow
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  a > span {
    margin: 2rem 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 0.5rem;
    margin-top: 2rem;
    padding: 0;
  }

  img {
    margin: 1rem 0;
  }

  p {
    line-height: 1.4;
    margin-bottom: 1rem;
    margin-top: 0;
  }

  span {
    margin-bottom: 1rem;
  }

  ul {
    list-style: disc;
    margin-bottom: 1rem;
    margin-top: 0;
    padding-left: 2rem;
  }
`;

const TextContent = ({ children, style }: { children: any, style?: Object }) => {
  return <Container style={style}>{children}</Container>;
};

export default TextContent;

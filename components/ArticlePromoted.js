// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import dateformat from 'dateformat';
import { palette, typeStyles } from '../lib/settings';

// Imports - components
import Avatar from '../components/Avatar';

// Styled components
const Container = styled.div`
  background-color: ${palette.red.dark};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 24rem;
  padding: 3rem;
`;

const Head = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const Body = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  padding-bottom: 2rem;
`;

const Title = styled.h3`
  ${typeStyles('h3')}
  color: white;
`;

const Date = styled.p`
  ${typeStyles('small')}
`;

// Component
// flow error when trying to define author shape :/
const ArticlePromoted = (
  {
    author,
    date,
    title,
  }: {
    author: any,
    date: string,
    title: string,
  },
) => {
  return (
    <Container>
      <Head>
        <Avatar name={author.data.name} image={author.data.image} />
        <Date>
          {dateformat(date, 'mediumDate')}
        </Date>
      </Head>
      <Body>
        <Title>
          {title}
        </Title>
      </Body>
    </Container>
  );
};

export default ArticlePromoted;

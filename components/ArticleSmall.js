// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import dateformat from 'dateformat';
import { prefixLink } from 'gatsby-helpers';
import { typeStyles } from '../lib/settings';

// Imports - components
import Avatar from '../components/Avatar';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  ${typeStyles('h3')}
  margin-bottom: 1rem;
`;

const Date = styled.p`
  ${typeStyles('small')}
`;

const ReadTime = styled.p`
  font-family: georgia;
  font-style: italic;
`;

const Image = styled.img`
  height: 15rem;
  margin-bottom: 2rem;
  object-fit: cover;
  width: 100%;
`;

const Text = styled.p`
  margin: 0 0 1rem;
`;

// Component
// flow error when trying to define author shape :/
const ArticlePromoted = (
  {
    author,
    date,
    image,
    text,
    readTime,
    title,
  }: {
    author: any,
    date: string,
    image?: string,
    text?: string,
    readTime: number,
    title: string,
  },
) => {
  return (
    <Container>
      <Head>
        <Date>
          {dateformat(date, 'mediumDate')}
        </Date>
        <ReadTime>
          {readTime} min read
        </ReadTime>
      </Head>
      {!!image && <Image src={prefixLink(`/images/articles/${image}`)} />}
      <Title>
        {title}
      </Title>
      {!!text &&
        <Text>
          {text}
        </Text>}
      <Avatar name={author.data.name} image={author.data.image} />
    </Container>
  );
};

export default ArticlePromoted;
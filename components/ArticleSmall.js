// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import dateformat from 'dateformat';
import { prefixLink } from 'gatsby-helpers';
import { typeStyles } from '../lib/settings';
import { imagePath } from '../lib/utilities';

// Imports - components
import { Link } from 'react-router';
import Avatar from '../components/Avatar';

// Styled components
const Container = styled(Link)`
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
const ArticleSmall = (
  {
    author,
    date,
    image,
    path,
    readTime,
    text,
    title,
  }: {
    author: any,
    date: string,
    image?: string,
    path: string,
    text?: string,
    readTime: number,
    title: string,
  },
) => {
  return (
    <Container to={path}>
      <Head>
        <Date>
          {dateformat(date, 'mediumDate')}
        </Date>
        <ReadTime>
          {readTime} min read
        </ReadTime>
      </Head>
      {!!image && <Image src={prefixLink(`${path}/${image}`)} />}
      <Title>
        {title}
      </Title>
      {!!text &&
        <Text>
          {text}
        </Text>}
      {!!author &&
        <Avatar
          name={author.data.name}
          image={imagePath(author.path, author.data.image)}
        />}
    </Container>
  );
};

export default ArticleSmall;

// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import string from 'string';
import Link from 'gatsby-link';

import { typeStyles, type } from 'lib/settings';
import { getImageUrl } from 'lib/utilities';

// Imports - components
import Avatar from 'components/Avatar';

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
  ${typeStyles('h3')};
  margin-bottom: 1rem;
`;

const Date = styled.p`
  ${typeStyles('small')};
  font-weight: ${type.weights.medium};
`;

const ReadTime = styled.p`
  font-family: georgia;
  font-style: italic;
  line-height: 1.5rem;
`;

const Image = styled.img`
  height: 15rem;
  margin-bottom: 2rem;
  object-fit: cover;
  width: 100%;
`;

const Text = styled.p`margin: 0 0 1rem;`;

// Component
// flow error when trying to define author shape :/
const ArticleSmall = ({
  author,
  date,
  imageUrl,
  path,
  readTime,
  text,
  title,
}: {
  author: ?Object,
  date: string,
  imageUrl?: string,
  path: string,
  text?: string,
  readTime: number,
  title: string,
}) => {
  return (
    <Container to={path}>
      <Head>
        <Date>{moment(date).format('MMM D, YYY')}</Date>
        <ReadTime>{readTime} min read</ReadTime>
      </Head>
      {imageUrl ? <Image src={imageUrl} /> : null}
      <Title>{title}</Title>
      {text ? <Text>{string(text).truncate(250).s}</Text> : null}
      {author ? <Avatar name={author.name} imageUrl={getImageUrl(author.image)} /> : null}
    </Container>
  );
};

export default ArticleSmall;

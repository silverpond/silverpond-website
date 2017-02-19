// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import dateformat from 'dateformat';
import { prefixLink } from 'gatsby-helpers';
import { type, typeStyles } from '../lib/settings';
import { textBlock } from '../lib/styles';
import { calcReadTime, getPerson } from '../lib/utilities';

// Imports - components
import Avatar from '../components/Avatar';
import Inner from '../components/Inner';
import Header from '../components/Header';
import Helmet from 'react-helmet';

const SplashImage = styled.img`
  height: 30rem;
  margin-bottom: 4rem;
  object-fit: cover;
  width: 100%;
`;

const Head = styled.div`
  margin-bottom: 5rem;
`;

const Body = styled.div`
  ${textBlock}
  margin-bottom: 6rem;
`;

const Title = styled.div`
  ${typeStyles('h2')}
  margin-bottom: 1.5rem;
`;

const Meta = styled.div`
  align-items: baseline;
  display: flex;
  margin-bottom: 1.5rem;

  & > * + * {
    margin-left: 2rem;
  }
`;

const Date = styled.p`
  ${typeStyles('small')}
  font-weight: ${type.weights.medium};
`;

const ReadTime = styled.p`
  font-family: georgia;
  font-style: italic;
  margin-bottom: 0;
  margin-top: 0;
`;

// Component
const MarkdownWrapper = (
  {
    route: {
      pages,
      page: {
        data: {
          author,
          title,
          image,
          date,
          body,
        },
      },
    },
  }: {
    route: {
      pages: Object,
      page: {
        data: {
          author: string,
          title: string,
          image: string,
          date: string,
          body: string,
        },
      },
    },
  },
) => {
  const authorDetails = getPerson(pages, author);
  return (
    <div>
      <Helmet title={title} />
      <Header />
      <SplashImage src={prefixLink(`./${image}`)} />
      <Inner size="small">
        <Head>
          <Title>
            {title}
          </Title>
          <Meta>
            <Date>
              {dateformat(date, 'mediumDate')}
            </Date>
            <ReadTime>
              {calcReadTime(body)} min read
            </ReadTime>
          </Meta>
          {!!author &&
            <Avatar
              name={authorDetails.data.name}
              image={authorDetails.data.image}
            />}
        </Head>
        <Body dangerouslySetInnerHTML={{ __html: body }} />
      </Inner>

    </div>
  );
};

export default MarkdownWrapper;

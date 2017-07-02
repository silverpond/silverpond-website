// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import dateformat from 'dateformat';
import { prefixLink } from 'gatsby-helpers';
import { type, typeStyles } from 'lib/settings';
import { textBlock } from 'lib/styles';
import { calcReadTime, getPerson, imagePath } from 'lib/utilities';
import type { Page } from 'lib/type-defs';

// Imports - components
import Avatar from 'components/Avatar';
import Header from 'components/Header';
import PostMeta from 'components/PostMeta';
import Section from 'components/Section';
import SplashImage from 'components/SplashImage';

const Head = styled.div`margin-bottom: 5rem;`;

const Body = styled.div`
  ${textBlock};
  margin-bottom: 6rem;
`;

const Title = styled.div`
  ${typeStyles('h2')};
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
  ${typeStyles('small')};
  font-weight: ${type.weights.medium};
`;

const ReadTime = styled.p`
  font-family: georgia;
  font-style: italic;
  margin-bottom: 0;
  margin-top: 0;
`;

// Component
const Article = ({
  route: { pages, page: { data: { author, body, date, draft, image, title } } },
}: {
  route: {
    pages: Page[],
    page: {
      data: {
        author: string,
        body: string,
        date: string,
        draft?: boolean,
        image: string,
        title: string,
      },
    },
  },
}) => {
  const authorDetails = getPerson(pages, author);
  return (
    <div>
      <PostMeta title={title} draft={draft} />
      <Header dark />
      <SplashImage src={prefixLink(`./${image}`)} />
      <Section size="small">
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
          {!!authorDetails &&
            <Avatar
              name={authorDetails.data.name}
              image={imagePath(authorDetails.path, authorDetails.data.image)}
            />}
        </Head>
        <Body dangerouslySetInnerHTML={{ __html: body }} />
      </Section>
    </div>
  );
};

export default Article;

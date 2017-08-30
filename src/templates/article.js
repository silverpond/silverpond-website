// @flow

import React from 'react';
import styled from 'styled-components';
import dateformat from 'dateformat';

import { type, typeStyles } from 'lib/settings';
import { textBlock } from 'lib/styles';
import { getImageUrl, getPerson } from 'lib/utilities';

import Avatar from 'components/Avatar';
import MastHead from 'components/MastHead';
import PostMeta from 'components/PostMeta';
import Section from 'components/Section';
import SplashImage from 'components/SplashImage';

const Body = styled.div`${textBlock} margin-bottom: 6rem;`;

const Meta = styled.div`text-align: right;`;

const Date = styled.p`${typeStyles('small')} font-weight: ${type.weights.medium};`;

const ReadTime = styled.p`
  font-family: georgia;
  font-style: italic;
  margin-bottom: 0;
  margin-top: 0;
`;

// Component
const Article = ({ data }: { data: Object }) => {
  const article = data.markdownRemark;
  const authorDetails = null;

  const { author, date, draft, image, title } = article.frontmatter;

  // const authorDetails = getPerson(pages, author);
  return (
    <div>
      <PostMeta title={title} draft={draft} />
      <MastHead title={title} subTitle={author} />
      {image ? <SplashImage src={getImageUrl(image)} /> : null}
      <Section size="small" style={{ paddingTop: '2rem' }}>
        <Meta>
          <Date>{dateformat(date, 'mediumDate')}</Date>
          <ReadTime>{article.timeToRead} min read</ReadTime>
        </Meta>
        {authorDetails ? (
          <Avatar name={authorDetails.name} imageUrl={getImageUrl(authorDetails.image)} />
        ) : null}
        <Body dangerouslySetInnerHTML={{ __html: article.html }} />
      </Section>
    </div>
  );
};

export const pageQuery = graphql`
  query ArticleQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        title
        author
        date
        draft
        image {
          childImageSharp {
            responsiveSizes {
              src
            }
          }
        }
      }
    }
  }
`;

export default Article;

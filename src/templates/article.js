// @flow

import React from 'react';
import styled from 'styled-components';
import dateformat from 'dateformat';

import { type, typeStyles } from 'lib/settings';
import { getImageUrl, getPerson } from 'lib/utilities';

import Avatar from 'components/Avatar';
import MastHead from 'components/MastHead';
import PostMeta from 'components/PostMeta';
import Section from 'components/Section';
import TextContent from 'components/TextContent';

const Meta = styled.div`text-align: right;`;

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
const Article = ({ data }: { data: Object }) => {
  if (!data.article) return null;

  const { author, frontmatter, html, timeToRead } = data.article;
  const { date, draft, image, title } = frontmatter;

  const people = data.people.edges.map(edge => edge.node.frontmatter);
  const authorDetails = getPerson(people, author);

  return (
    <div>
      <PostMeta title={title} draft={draft} />
      <MastHead imageUrl={getImageUrl(image)} title={title} subTitle={author} />
      <Section size="small" style={{ padding: '4rem 0' }}>
        <Meta>
          <Date>{dateformat(date, 'mediumDate')}</Date>
          <ReadTime>{timeToRead} min read</ReadTime>
        </Meta>
        {author ? (
          <Avatar name={authorDetails.name} imageUrl={getImageUrl(authorDetails.image)} />
        ) : null}
        <TextContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </TextContent>
      </Section>
    </div>
  );
};

export const pageQuery = graphql`
  query ArticleQuery($path: String!) {
    article: markdownRemark(frontmatter: { path: { eq: $path } }) {
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
    people: allMarkdownRemark(filter: { frontmatter: { category: { eq: "people" } } }) {
      edges {
        node {
          frontmatter {
            name
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
    }
  }
`;

export default Article;

// @flow

import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { type, typeStyles } from 'lib/settings';
import { getImageUrl, getPerson } from 'lib/utilities';

import Avatar from 'components/Avatar';
import MastHead from 'components/MastHead';
import PostMeta from 'components/PostMeta';
import Section from 'components/Section';
import TextContent from 'components/TextContent';

const Overview = styled.div`
  align-items: center;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 0 1rem 2rem;
`;

const Meta = styled.div`
  align-self: center;
  text-align: right;
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

const Content = styled.div`padding: 0 1rem;`;

// Component
const Article = ({ data }: { data: Object }) => {
  if (!data.article) return null;

  const { frontmatter, html, timeToRead } = data.article;
  const { author, date, draft, image, title } = frontmatter;

  const people = data.people.edges.map(edge => edge.node.frontmatter);
  const authorDetails = getPerson(people, author);

  return (
    <div>
      <PostMeta title={title} draft={draft} />
      <MastHead imageUrl={getImageUrl(image)} title={title} />
      <Section size="small" style={{ padding: '4rem 0' }}>
        <Overview>
          {authorDetails ? (
            <Avatar name={authorDetails.name} imageUrl={getImageUrl(authorDetails.image)} />
          ) : (
            <span />
          )}
          <Meta>
            <Date>{moment(date).format('MMM D, YYY')}</Date>
            <ReadTime>{timeToRead} min read</ReadTime>
          </Meta>
        </Overview>
        <TextContent>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
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

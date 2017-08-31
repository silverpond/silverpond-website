// @flow
// Imports - config
import React from 'react';
import { chunk } from 'lodash';

import { filterNot, findFeaturedPages, getPerson, getImageUrl } from 'lib/utilities';

import { ColWrapper, Col } from 'components/Grid';
import ArticleFeatured from 'components/ArticleFeatured';
import ArticleSmall from 'components/ArticleSmall';
import Helmet from 'components/Helmet';
import MastHead from 'components/MastHead';
import Section from 'components/Section';

// Component
const Articles = ({ data }: { data: Object }) => {
  const articles = data.articles.edges.map(edge => {
    const { frontmatter, html, timeToRead } = edge.node;
    return { ...frontmatter, timeToRead, body: html };
  });

  const people = data.people.edges.map(edge => edge.node.frontmatter);

  const featuredArticle = findFeaturedPages(articles)[0];
  const nonFeaturedArticles = filterNot(articles, [featuredArticle]).reverse();

  return (
    <div>
      <Helmet title="Articles" />
      <MastHead title="Articles" subTitle="Keep up to date with the industry" />
      <Section color="grey">
        <ArticleFeatured
          to={featuredArticle.path}
          title={featuredArticle.title}
          text={featuredArticle.meta}
          tag="Featured"
          imageUrl={getImageUrl(featuredArticle.image)}
        />
      </Section>
      {chunk(nonFeaturedArticles, 2).map((row, index) => {
        return (
          <Section key={index}>
            <ColWrapper>
              {row.map(article => {
                return (
                  <Col span="6" key={article.path}>
                    <ArticleSmall
                      author={getPerson(people, article.author)}
                      date={article.date}
                      title={article.title}
                      text={article.meta}
                      readTime={article.timeToRead}
                      imageUrl={getImageUrl(article.image)}
                      path={article.path}
                    />
                  </Col>
                );
              })}
            </ColWrapper>
          </Section>
        );
      })}
    </div>
  );
};

export const pageQuery = graphql`
  query ArticlesQuery {
    articles: allMarkdownRemark(filter: { frontmatter: { category: { eq: "articles" } } }) {
      edges {
        node {
          timeToRead
          frontmatter {
            author
            date
            featured
            image {
              childImageSharp {
                responsiveSizes {
                  src
                }
              }
            }
            path
            title
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

export default Articles;

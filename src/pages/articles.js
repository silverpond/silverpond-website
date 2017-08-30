// @flow
// Imports - config
import React from 'react';
import hash from 'object-hash';
import { chunk } from 'lodash';

import {
  filterNot,
  filterPagesByCategory,
  findFeaturedPages,
  getPerson,
  getImageUrl,
} from 'lib/utilities';

import { ColWrapper, Col } from 'components/Grid';
import ArticleFeatured from 'components/ArticleFeatured';
import ArticleSmall from 'components/ArticleSmall';
import Helmet from 'components/Helmet';
import MastHead from 'components/MastHead';
import Section from 'components/Section';

// Component
const Articles = ({ data }: { data: Object }) => {
  const pages = data.allMarkdownRemark.edges.map(edge => {
    const { frontmatter, html, timeToRead } = edge.node;
    return { ...frontmatter, timeToRead, body: html };
  });

  const articles = filterPagesByCategory(pages, 'articles');
  const featuredArticle = findFeaturedPages(articles)[0];
  const nonFeaturedArticles = filterNot(articles, [featuredArticle]).reverse();

  return (
    <div>
      <Helmet title="Articles" />
      <MastHead title="Articles" subTitle="Keep up to date with the industry" />
      <Section color="grey">
        <ArticleFeatured
          to={featuredArticle.path}
          imageUrl={getImageUrl(featuredArticle.image)}
          title={featuredArticle.title}
          text={featuredArticle.meta}
          tag="Featured"
        />
      </Section>
      {chunk(nonFeaturedArticles, 2).map(group => {
        return (
          <Section key={hash(group)}>
            <ColWrapper>
              {group.map(article => {
                return (
                  <Col span="6" key={hash(article)}>
                    <ArticleSmall
                      author={getPerson(pages, article.author)}
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
    allMarkdownRemark {
      edges {
        node {
          html
          timeToRead
          frontmatter {
            active
            attendLink
            date
            intro
            category
            featured
            hosts
            image {
              childImageSharp {
                responsiveSizes {
                  src
                }
              }
            }
            meta
            name
            path
            title
          }
        }
      }
    }
  }
`;

export default Articles;

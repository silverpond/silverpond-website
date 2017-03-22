// @flow
// Imports - config
import React from 'react';
import hash from 'object-hash';
import { chunk } from 'lodash';
import { prefixLink } from 'gatsby-helpers';
import {
  calcReadTime,
  filterNot,
  filterPagesByCategory,
  findFeaturedPages,
  getPerson,
  imagePath,
} from '../lib/utilities';

import { ColWrapper, Col } from '../components/Grid';
import ArticleFeatured from '../components/ArticleFeatured';
import ArticleSmall from '../components/ArticleSmall';
import MastHead from '../components/MastHead';
import Section from '../components/Section';

// Component
const Articles = (
  {
    route: { pages },
  }: {
    route: Object,
  },
) => {
  const articles = filterPagesByCategory(pages, 'articles').filter(
    article => !article.data.draft === true,
  );
  const featuredArticle = findFeaturedPages(articles)[0];
  const nonFeaturedArticles = filterNot(articles, [featuredArticle]).reverse();

  return (
    <div>
      <MastHead title="Articles" subTitle="We write lots of great articles." />

      <Section color="grey">
        <ArticleFeatured
          to={prefixLink(featuredArticle.path)}
          image={imagePath(featuredArticle.path, featuredArticle.data.image)}
          title={featuredArticle.data.title}
          text={featuredArticle.data.meta}
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
                      author={getPerson(pages, article.data.author)}
                      date={article.data.date}
                      title={article.data.title}
                      text={article.data.meta}
                      readTime={calcReadTime(article.data.body)}
                      image={article.data.image}
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

export default Articles;

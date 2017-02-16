// @flow
// Imports - config
import React from 'react';
import { chunk } from 'lodash';
import { prefixLink } from 'gatsby-helpers';
import { filterPages, calcReadTime, getPerson } from '../lib/utilities';

import ArticleFeatured from '../components/ArticleFeatured';
import ArticleSmall from '../components/ArticleSmall';
import MastHead from '../components/MastHead';
import Section from '../components/Section';
import { ColWrapper, Col } from '../components/Grid';

// Component
const Articles = (
  {
    route: { pages },
  }: {
    route: Object,
  },
) => {
  const articles = filterPages(pages, 'articles');
  const featuredArticle = articles[0];
  return (
    <div>
      <MastHead title="Articles" subTitle="We write lots of great articles." />

      <Section color="grey">
        <ArticleFeatured
          to={prefixLink(featuredArticle.data.path)}
          image={prefixLink(
            `/images/case-studies/${featuredArticle.data.image}`,
          )}
          title={featuredArticle.data.title}
          text={featuredArticle.data.meta}
          tag="Featured"
        />
      </Section>

      {chunk(articles, 3).map((group, i) => {
        return (
          <Section key={i}>
            <ColWrapper>
              {group.map(article => {
                return (
                  <Col span="4" key={article.data.date}>
                    <ArticleSmall
                      author={getPerson(pages, article.data.author)}
                      date={article.data.date}
                      title={article.data.title}
                      text={article.data.meta}
                      readTime={calcReadTime(article.data.body)}
                      image={article.data.image}
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
// <Helmet
//   meta={[
//     { name: 'description', content: 'Sample blog' },
//     { name: 'keywords', content: 'blog, articles' },
//   ]}
// />;

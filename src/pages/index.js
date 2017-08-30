// @flow
import React from 'react';
import styled, { keyframes } from 'styled-components';

import { palette, typeStyles } from 'lib/settings';
import { getImageUrl, getPerson, getPromotedPages, staticAssetPath } from 'lib/utilities';

import { ColWrapper, Col } from 'components/Grid';
import ArrowLink from 'components/ArrowLink';
import ArticleSmall from 'components/ArticleSmall';
import ArticleFeatured from 'components/ArticleFeatured';
import EventSmall from 'components/EventSmall';
import Helmet from 'components/Helmet';
import IntroText from 'components/IntroText';
import ItemList from 'components/ItemList';
import Nav from 'components/Nav';
import PromotedContent from 'components/PromotedContent';
import Section from 'components/Section';
import Logo from 'components/Logo';
// Keyframes
const tagline = keyframes`
  from {
    transform: translateY(10rem);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Splash = styled.div`
  align-items: center;
  background-color: ${palette.red.base};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 3vh);
  min-height: 50rem;
  padding: 2.5rem 0;
`;

const SplashInner = styled.div`
  alignItems: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

const TagLine = styled.h2`
  ${typeStyles('h1')} animation: ${tagline} 1s cubic-bezier(0, 0, 0.4, 1.2) both 3s;
  color: white;
  font-family: georgia;
  font-size: 4rem;
  line-height: 5rem;
  margin-bottom: 5rem;
  text-align: center;
`;

const Highlight = styled.span`color: ${palette.red.lighter};`;

const AboutText = styled(IntroText)`margin-bottom: 2rem;`;

const AboutImage = styled.img`
  margin-left: -6rem;
  width: calc(100% + 6rem);
`;

const ArticleCol = styled(Col)`display: flex;`;

const ClientsWrapper = styled(ColWrapper)`align-items: center;`;

const Home = ({ data }: { data: Object }) => {
  const pages = data.allMarkdownRemark.edges.map(edge => {
    const { frontmatter, html, timeToRead } = edge.node;
    return { ...frontmatter, body: html, timeToRead };
  });

  const promotedCaseStudy = getPromotedPages(pages, 'case-studies', 1)[0];
  const promotedArticles = getPromotedPages(pages, 'articles');
  const promotedEvents = getPromotedPages(pages, 'events');
  const promotedClients = getPromotedPages(pages, 'clients', 4);

  return (
    <div>
      <Helmet title="Home" />
      <Splash>
        <Nav
          style={{
            flexShrink: 0,
            marginBottom: '2rem',
          }}
          white
        />
        <SplashInner>
          <Logo style={{ marginBottom: '4rem' }} />
          <TagLine>
            A team of technical leaders specialising in
            <br />
            <Highlight>machine learning</Highlight>
            &nbsp;and&nbsp;
            <Highlight>software engineering</Highlight>
            .
          </TagLine>
        </SplashInner>
      </Splash>
      <Section>
        <ColWrapper>
          <Col span="5">
            <AboutImage src={staticAssetPath('coffee.jpg')} alt="Jono Chang having coffee." />
          </Col>
          <Col span="7">
            <AboutText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim mi,
              vulputate nec tincidunt quis, finibus id ex. Quisque venenatis rhoncus odio, eu ornare
              tortor pretium sit amet. Sed tincidunt maximus felis a dictum. Donec eu vestibulum
              sapien. Ut tempus id enim ut auctor. Suspendisse congue lacus ultrices tellus faucibus
              semper. pretium sit amet. Sed tincidunt maximus felis a dictum. Donec eu vestibulum
              sapien. Ut tempus id enim ut auctor. Suspendisse congue lacus ultrices tellus faucibus
              semper.
            </AboutText>
            <ArrowLink to="/deep-learning">Find out more about deep learning</ArrowLink>
          </Col>
        </ColWrapper>
      </Section>
      <Section color="grey">
        <ArticleFeatured
          to={promotedCaseStudy.path}
          imageUrl={getImageUrl(promotedCaseStudy.image)}
          title={promotedCaseStudy.title}
          text={promotedCaseStudy.meta}
          tag="Case study"
        />
      </Section>
      <PromotedContent category="events" to="/events/">
        <ItemList>
          {promotedEvents.map(event => {
            const hosts = event.hosts.map(host => getPerson(pages, host));
            return (
              <EventSmall
                key={event.title}
                date={event.date}
                title={event.title}
                venue={event.venue}
                hosts={hosts}
                text={event.intro}
                attendLink={event.attendLink}
                eventLink={event.path}
              />
            );
          })}
        </ItemList>
      </PromotedContent>
      <PromotedContent category="articles" to="/articles/" color="grey">
        <ColWrapper>
          {promotedArticles.map(article => {
            const person = getPerson(pages, article.author);
            return (
              <ArticleCol key={article.title} span="6" style={{ display: 'flex' }}>
                <ArticleSmall
                  author={person}
                  date={article.date}
                  title={article.title}
                  text={article.meta}
                  readTime={article.timeToRead}
                  imageUrl={getImageUrl(article.image)}
                  path={article.path}
                />
              </ArticleCol>
            );
          })}
        </ColWrapper>
      </PromotedContent>
      <PromotedContent category="clients" to="/clients/">
        <ClientsWrapper>
          {promotedClients.map(client => {
            return (
              <Col key={client.name} span="3">
                <img src={getImageUrl(client.image)} alt={`${client.name} logo`} />
              </Col>
            );
          })}
        </ClientsWrapper>
      </PromotedContent>
    </div>
  );
};

export const pageQuery = graphql`
  query LandingQuery {
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

export default Home;

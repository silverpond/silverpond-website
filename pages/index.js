// @flow
// Imports - config
import React from 'react';
import string from 'string';
import styled from 'styled-components';
import { calcReadTime, getPerson, getPromotedPages } from '../lib/utilities';
import { palette, typeStyles } from '../lib/settings';
import { prefixLink } from 'gatsby-helpers';

// Imports - components
import { ColWrapper, Col } from '../components/Grid';
import ArrowLink from '../components/ArrowLink';
import ArticleSmall from '../components/ArticleSmall';
import ArticleFeatured from '../components/ArticleFeatured';
import EventSmall from '../components/EventSmall';
import Inner from '../components/Inner';
import IntroText from '../components/IntroText';
import Nav from '../components/Nav';
import PromotedContent from '../components/PromotedContent';
import Section from '../components/Section';

// Styled components
const Splash = styled.div`
  align-items: center;
  background-color: ${palette.red.base};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 3vh);
  justify-content: space-between;
  min-height: 66rem;
  padding: 2rem 0 5rem;
`;

const Logo = styled.img`
  margin-bottom: 4rem;
  width: 1085px;
`;

const TagLine = styled.h2`
  ${typeStyles('h2')}
  color: white;
  font-family: volkhov;
  margin-bottom: 5rem;
  text-align: center;
`;

const Highlight = styled.span`
  color: ${palette.red.light};
`;

const AboutText = styled(IntroText)`
  margin-bottom: 2rem;
`;

const ArticleCol = styled(Col)`
  display: flex;
`;

const ClientsWrapper = styled(ColWrapper)`
  align-items: center;
`;

const Card = styled.div`
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,.15);
  padding: 2rem 2rem 1.5rem;
`;

// Component
const Home = (
  {
    route,
  }: {
    route: {
      pages: Object[],
    },
  },
) => {
  const promotedCaseStudy = getPromotedPages(route.pages, 'case-studies', 1)[0];
  const promotedArticles = getPromotedPages(route.pages, 'articles');
  const promotedEvents = getPromotedPages(route.pages, 'events');
  const promotedClients = getPromotedPages(route.pages, 'clients', 4);
  const featuredEvent = promotedEvents[0];
  const featuredArticle = promotedArticles[0];
  return (
    <div>
      <Splash>

        <Nav style={{ flexShrink: 0, marginBottom: '2rem' }} white />

        <div style={{ flexShrink: 0 }}>
          <Logo src={prefixLink('images/silverpond-logo.svg')} />
          <TagLine>
            A digital agency
            <br />
            specialising in&nbsp;
            <Highlight>
              deep learning
            </Highlight>
            .
          </TagLine>
        </div>

        <Inner style={{ flexShrink: 0 }}>
          <ColWrapper>
            <Col span="6">
              <Card>
                <EventSmall
                  key={featuredEvent.data.title}
                  date={featuredEvent.data.date}
                  title={featuredEvent.data.title}
                  venue={featuredEvent.data.venue}
                  text={string(featuredEvent.data.intro).truncate(150).s}
                  attendLink={featuredEvent.data.attendLink}
                  eventLink={prefixLink(featuredEvent.path)}
                />
              </Card>
            </Col>

            <Col span="6" style={{ display: 'flex' }}>
              <Card style={{ flexGrow: 1 }}>
                <ArticleSmall
                  author={getPerson(route.pages, featuredArticle.data.author)}
                  date={featuredArticle.data.date}
                  title={featuredArticle.data.title}
                  readTime={calcReadTime(featuredArticle.data.body)}
                  path={featuredArticle.path}
                />
              </Card>
            </Col>

          </ColWrapper>
        </Inner>

      </Splash>

      <Section>
        <ColWrapper>
          <Col span="5">
            image
          </Col>
          <Col span="7">
            <AboutText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse enim mi, vulputate nec tincidunt quis, finibus id ex.
              Quisque venenatis rhoncus odio, eu ornare tortor pretium sit
              amet. Sed tincidunt maximus felis a dictum. Donec eu vestibulum
              sapien. Ut tempus id enim ut auctor. Suspendisse congue lacus
              ultrices tellus faucibus semper. pretium sit amet. Sed tincidunt
              maximus felis a dictum. Donec eu vestibulum sapien. Ut tempus id
              enim ut auctor. Suspendisse congue lacus ultrices tellus faucibus
              semper.
            </AboutText>
            <ArrowLink to={prefixLink('/deep-learning')}>
              Find out more about deep learning
            </ArrowLink>
          </Col>
        </ColWrapper>
      </Section>

      <Section color="grey">
        <ArticleFeatured
          to={prefixLink(promotedCaseStudy.data.path)}
          image={prefixLink(
            `/images/case-studies/${promotedCaseStudy.data.image}`,
          )}
          title={promotedCaseStudy.data.title}
          text={promotedCaseStudy.data.meta}
          tag="Case study"
        />
      </Section>

      <PromotedContent category="events" to="/events">
        {promotedEvents.map((event, i) => {
          const hosts = event.data.hosts.map(host =>
            getPerson(route.pages, host));
          return (
            <EventSmall
              key={event.data.title}
              style={{ marginTop: i !== 0 ? '5rem' : 0 }}
              date={event.data.date}
              title={event.data.title}
              venue={event.data.venue}
              hosts={hosts}
              text={event.data.intro}
              attendLink={event.data.attendLink}
              eventLink={prefixLink(event.path)}
            />
          );
        })}
      </PromotedContent>

      <PromotedContent category="articles" to="/articles" color="grey">
        <ColWrapper>
          {promotedArticles.map(article => {
            return (
              <ArticleCol
                key={article.data.title}
                span="6"
                style={{ display: 'flex' }}
              >
                <ArticleSmall
                  author={getPerson(route.pages, article.data.author)}
                  date={article.data.date}
                  title={article.data.title}
                  text={article.data.meta}
                  readTime={calcReadTime(article.data.body)}
                  image={article.data.image}
                  path={article.path}
                />
              </ArticleCol>
            );
          })}
        </ColWrapper>
      </PromotedContent>

      <PromotedContent category="clients" to="/clients">
        <ClientsWrapper>
          {promotedClients.map(client => {
            return (
              <Col key={client.data.name} span="3">
                <img
                  src={prefixLink(`images/clients/${client.data.image}`)}
                  alt={`${client.data.name} logo`}
                />
              </Col>
            );
          })}
        </ClientsWrapper>
      </PromotedContent>

    </div>
  );
};

export default Home;

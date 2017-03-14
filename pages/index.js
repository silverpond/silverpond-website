// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { palette, typeStyles } from '../lib/settings';
import { prefixLink } from 'gatsby-helpers';
import {
  calcReadTime,
  getPerson,
  getPromotedPages,
  imagePath,
} from '../lib/utilities';

// Imports - components
import { ColWrapper, Col } from '../components/Grid';
import ArrowLink from '../components/ArrowLink';
import ArticleSmall from '../components/ArticleSmall';
import ArticleFeatured from '../components/ArticleFeatured';
import EventSmall from '../components/EventSmall';
import IntroText from '../components/IntroText';
import ItemList from '../components/ItemList';
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
  min-height: 66rem;
  padding: 2.5rem 0 5rem;
`;

const SplashInner = styled.div`
  alignItems: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

const Logo = styled.img`
  margin-bottom: 4rem;
  width: 1085px;
`;

const TagLine = styled.h2`
  ${typeStyles('h1')}
  color: white;
  font-family: georgia;
  font-size: 4rem;
  line-height: 5rem;
  margin-bottom: 5rem;
  text-align: center;
`;

const Highlight = styled.span`
  color: ${palette.red.lighter};
`;

const AboutText = styled(IntroText)`
  margin-bottom: 2rem;
`;

const AboutImage = styled.img`
  margin-left: -6rem;
  width: calc(100% + 6rem);
`;

const ArticleCol = styled(Col)`
  display: flex;
`;

const ClientsWrapper = styled(ColWrapper)`
  align-items: center;
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
  return (
    <div>
      <Splash>

        <Nav
          style={{
            flexShrink: 0,
            marginBottom: '2rem',
          }}
          white
        />

        <SplashInner>
          <Logo src={prefixLink('images/silverpond-logo.svg')} />
          <TagLine>
            A team of technical leaders specialising in
            <br />
            <Highlight>
              machine learning
            </Highlight>
            &nbsp;and&nbsp;
            <Highlight>
              software engineering
            </Highlight>
            .
          </TagLine>
        </SplashInner>
      </Splash>

      <Section>
        <ColWrapper>
          <Col span="5">
            <AboutImage
              src={prefixLink('/images/coffee.png')}
              alt="Jono Chang having coffee."
            />
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
            <ArrowLink to={prefixLink('/deep-learning/')}>
              Find out more about deep learning
            </ArrowLink>
          </Col>
        </ColWrapper>
      </Section>

      <Section color="grey">
        <ArticleFeatured
          to={prefixLink(promotedCaseStudy.path)}
          image={imagePath(
            promotedCaseStudy.path,
            promotedCaseStudy.data.image,
          )}
          title={promotedCaseStudy.data.title}
          text={promotedCaseStudy.data.meta}
          tag="Case study"
        />
      </Section>

      <PromotedContent category="events" to="/events/">
        <ItemList>
          {promotedEvents.map(event => {
            const hosts = event.data.hosts.map(host =>
              getPerson(route.pages, host));
            return (
              <EventSmall
                key={event.data.title}
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
        </ItemList>
      </PromotedContent>

      <PromotedContent category="articles" to="/articles/" color="grey">
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

      <PromotedContent category="clients" to="/clients/">
        <ClientsWrapper>
          {promotedClients.map(client => {
            return (
              <Col key={client.data.name} span="3">
                <img
                  src={prefixLink(`${client.path}${client.data.image}`)}
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

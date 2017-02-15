// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { prefixLink } from 'gatsby-helpers';
import { palette, typeStyles } from '../lib/settings';
import { getPerson, getPromotedPages } from '../lib/utilities';

// Imports - components
import { ColWrapper, Col } from '../components/Grid';
import ArrowLink from '../components/ArrowLink';
import ArticlePromoted from '../components/ArticlePromoted';
import CaseStudySmall from '../components/CaseStudySmall';
import EventSmall from '../components/EventSmall';
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
  height: calc(100vh - 6rem);
  padding: 2rem 0;
`;

const Logo = styled.img`
  margin-bottom: 4rem;
  width: 1085px;
`;

const TagLine = styled.h2`
  ${typeStyles('h2')}
  color: white;
  font-family: volkhov;
  text-align: center;
`;

const Highlight = styled.span`
  color: ${palette.red.light};
`;

const AboutText = styled(IntroText)`
  margin-bottom: 2rem;
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
  const promotedArticles = getPromotedPages(route.pages, 'articles');
  const promotedEvents = getPromotedPages(route.pages, 'events');
  return (
    <div>
      <Splash>

        <Nav
          style={{ marginBottom: '2rem' }}
          white
          items={[
            'About',
            'Co-working',
            'Articles',
            'Events',
            'Training',
            'Clients',
            'Contact',
          ]}
        />

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
            <ArrowLink to="/deep-learning">
              Find out more about deep learning
            </ArrowLink>
          </Col>
        </ColWrapper>
      </Section>

      <Section color="grey">
        <CaseStudySmall
          to="case-studies/powercor"
          image="images/powercor-grid.png"
          title="Smarter electrical grids through advanced analytics with Powercor"
          intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Suspendisse enim mi, vulputate nec tincidunt quis, finibus id ex.
                 Quisque venenatis rhoncus odio, eu ornare tortor pretium sit amet. Sed
                 tincidunt maximus felis a dictum. Donec eu vestibulum sapien. Ut
                 tempus id enim ut auctor. Suspendisse congue lacus ultrices tellus
                 faucibus semper."
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
              location={{
                title: event.data.location,
                link: event.data.locationLink,
              }}
              hosts={hosts}
              text={event.data.intro}
            />
          );
        })}
      </PromotedContent>

      <PromotedContent category="articles" to="/articles" color="red">
        <ColWrapper>
          {promotedArticles.map(article => {
            return (
              <Col
                key={article.data.title}
                span="6"
                style={{ display: 'flex' }}
              >
                <ArticlePromoted
                  author={getPerson(route.pages, article.data.author)}
                  date={article.data.date}
                  title={article.data.title}
                />
              </Col>
            );
          })}
        </ColWrapper>
      </PromotedContent>

    </div>
  );
};

export default Home;

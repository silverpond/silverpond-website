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
import Logo from 'components/Logo';
import Nav from 'components/Nav';
import PromotedContent from 'components/PromotedContent';
import Section from 'components/Section';
import Tag from 'components/Tag';

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
  height: 100vh;
  min-height: 50rem;
  padding: 2.5rem;
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
  color: ${palette.red.lighter};
  font-family: georgia;
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 2.5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 4rem;
    line-height: 5rem;
    margin-bottom: 5rem;
  }
`;
const Highlight = styled.span`color: white;`;
const HeadingTag = styled(Tag)`margin-bottom: 1.5rem;`;

const LeadText = styled(IntroText)`margin-bottom: 2rem;`;
const BodyText = styled.div`margin-bottom: 2rem;`;

const AboutImage = styled.img`width: 100%;`;
const ArticleCol = styled(Col)`display: flex;`;
const ClientsWrapper = styled(ColWrapper)`align-items: center;`;

const Home = ({ data }: { data: Object }) => {
  const pages = data.pages.edges.map(edge => {
    const { frontmatter, html, timeToRead } = edge.node;
    return { ...frontmatter, body: html, timeToRead };
  });

  const people = data.people.edges.map(edge => edge.node.frontmatter);

  const promotedArticles = getPromotedPages(pages, 'articles');
  const promotedCaseStudy = getPromotedPages(pages, 'case-studies', 1)[0];
  const promotedClients = getPromotedPages(pages, 'clients', 4);
  const promotedEvents = getPromotedPages(pages, 'events');

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
            <LeadText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim mi,
              vulputate nec tincidunt quis, finibus id ex. Quisque venenatis rhoncus odio, eu ornare
              tortor pretium sit amet. Sed tincidunt maximus felis a dictum. Donec eu vestibulum
              sapien. Ut tempus id enim ut auctor. Suspendisse congue lacus ultrices tellus faucibus
              semper. pretium sit amet. Sed tincidunt maximus felis a dictum. Donec eu vestibulum
              sapien. Ut tempus id enim ut auctor. Suspendisse congue lacus ultrices tellus faucibus
              semper.
            </LeadText>
            <ArrowLink to="/deep-learning">Find out more about deep learning</ArrowLink>
          </Col>
        </ColWrapper>
      </Section>
      <Section color="grey">
        <ColWrapper>
          <Col span="6">
            <HeadingTag>Object Detection</HeadingTag>
            <BodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim mi,
              vulputate nec tincidunt quis, finibus id ex. Quisque venenatis rhoncus odio, eu ornare
              tortor pretium sit amet. Sed tincidunt maximus felis a dictum. Donec eu vestibulum
              sapien.
            </BodyText>
            <ArrowLink to="/object-detection">Try out our object detection demo</ArrowLink>
          </Col>
          <Col span="6">
            <AboutImage
              src={staticAssetPath('computer-vision.png')}
              alt="Object detection image."
            />
          </Col>
        </ColWrapper>
      </Section>
      <Section>
        <ArticleFeatured
          to={promotedCaseStudy.path}
          imageUrl={getImageUrl(promotedCaseStudy.image)}
          title={promotedCaseStudy.title}
          text={promotedCaseStudy.meta}
          tag="Case study"
        />
      </Section>
      <PromotedContent category="events" to="/events/" color="grey">
        <ItemList>
          {promotedEvents.map(event => {
            const hosts = event.hosts.map(host => getPerson(people, host));
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
      <PromotedContent category="articles" to="/articles/">
        <ColWrapper>
          {promotedArticles.map(article => {
            const person = getPerson(people, article.author);
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
      <PromotedContent category="clients" to="/clients/" color="grey">
        <ClientsWrapper>
          {promotedClients.map(client => {
            return (
              <Col key={client.name} span="3" style={{ textAlign: 'center' }}>
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
    pages: allMarkdownRemark(filter: { frontmatter: { featured: { eq: true } } }) {
      edges {
        node {
          html
          timeToRead
          frontmatter {
            attendLink
            author
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

export default Home;

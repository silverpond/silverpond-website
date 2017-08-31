// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import s from 'string';

import { filterNot, filterPagesByCategory, findFeaturedPages, getHosts } from 'lib/utilities';

import EventSmall from 'components/EventSmall';
import Helmet from 'components/Helmet';
import ItemList from 'components/ItemList';
import MastHead from 'components/MastHead';
import Section from 'components/Section';
import Tag from 'components/Tag';

const FeaturedTag = styled(Tag)`margin-bottom: 2rem;`;

// Component
const Events = ({ data }: { data: Object }) => {
  const events = data.events.edges.map(edge => {
    const { excerpt, frontmatter, html, timeToRead } = edge.node;
    return { ...frontmatter, excerpt, timeToRead, body: html };
  });

  const people = data.people.edges.map(edge => edge.node.frontmatter);

  const featuredEvent = findFeaturedPages(events)[0];
  const featuredEventHosts = getHosts(featuredEvent.hosts, people);
  const nonFeaturedEvents = filterNot(events, [featuredEvent]);

  return (
    <div>
      <Helmet title="Events" />
      <MastHead title="Events" subTitle="We run lots of great events" />
      <Section color="grey" size="medium">
        <FeaturedTag>Featured</FeaturedTag>
        <EventSmall
          key={featuredEvent.path}
          date={featuredEvent.date}
          title={featuredEvent.title}
          venue={featuredEvent.venue}
          hosts={featuredEventHosts}
          text={featuredEvent.intro || featuredEvent.excerpt}
          eventLink={featuredEvent.path}
        />
      </Section>
      <Section size="medium">
        <ItemList>
          {nonFeaturedEvents.map(event => {
            const hosts = getHosts(event.hosts, people);
            return (
              <EventSmall
                key={event.path}
                date={event.date}
                title={event.title}
                venue={event.venue}
                hosts={hosts}
                text={event.intro || event.excerpt}
                attendLink={event.attendLink}
                eventLink={event.path}
              />
            );
          })}
        </ItemList>
      </Section>
    </div>
  );
};

export const pageQuery = graphql`
  query EventsQuery {
    events: allMarkdownRemark(filter: { frontmatter: { category: { eq: "events" } } }) {
      edges {
        node {
          timeToRead
          excerpt
          frontmatter {
            attendLink
            date
            intro
            featured
            hosts
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

export default Events;

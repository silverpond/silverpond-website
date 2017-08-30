// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import hash from 'object-hash';
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
  const pages = data.allMarkdownRemark.edges.map(edge => {
    const { frontmatter, html, timeToRead } = edge.node;
    return { ...frontmatter, timeToRead, body: html };
  });

  const events = filterPagesByCategory(pages, 'events');
  const featuredEvent = findFeaturedPages(events)[0];
  const featuredEventHosts = getHosts(featuredEvent.hosts, pages);
  const nonFeaturedEvents = filterNot(events, [featuredEvent]);

  return (
    <div>
      <Helmet title="Events" />
      <MastHead title="Events" subTitle="We run lots of great events" />
      <Section color="grey" size="medium">
        <FeaturedTag>Featured</FeaturedTag>
        <EventSmall
          key={hash(featuredEvent)}
          date={featuredEvent.date}
          title={featuredEvent.title}
          venue={featuredEvent.venue}
          hosts={featuredEventHosts}
          text={featuredEvent.intro || featuredEvent.body}
          eventLink={featuredEvent.path}
        />
      </Section>
      <Section size="medium">
        <ItemList>
          {nonFeaturedEvents.map(event => {
            const hosts = getHosts(event.hosts, pages);
            return (
              <EventSmall
                key={hash(event)}
                date={event.date}
                title={event.title}
                venue={event.venue}
                hosts={hosts}
                text={event.intro || s(event.body).stripTags().s}
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

export default Events;

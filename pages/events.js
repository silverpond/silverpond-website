// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import hash from 'object-hash';
import { prefixLink } from 'gatsby-helpers';
import s from 'string';
import {
  filterNot,
  filterPagesByCategory,
  findFeaturedPages,
  getHosts,
} from '../lib/utilities';

import EventSmall from '../components/EventSmall';
import Helmet from '../components/Helmet';
import ItemList from '../components/ItemList';
import MastHead from '../components/MastHead';
import Section from '../components/Section';
import Tag from '../components/Tag';

const FeaturedTag = styled(Tag)`
  margin-bottom: 2rem;
`;

// Component
const Events = (
  {
    route: { pages },
  }: {
    route: Object,
  },
) => {
  const events = filterPagesByCategory(pages, 'events');
  const featuredEvent = findFeaturedPages(events)[0];
  const featuredEventHosts = getHosts(featuredEvent.data.hosts, pages);
  const nonFeaturedEvents = filterNot(events, [featuredEvent]);

  return (
    <div>
      <Helmet title="Events" />
      <MastHead title="Events" subTitle="We run lots of great events" />

      <Section color="grey" size="medium">
        <FeaturedTag>
          Featured
        </FeaturedTag>
        <EventSmall
          key={hash(featuredEvent)}
          date={featuredEvent.data.date}
          title={featuredEvent.data.title}
          venue={featuredEvent.data.venue}
          hosts={featuredEventHosts}
          text={featuredEvent.data.intro || featuredEvent.data.body}
          eventLink={prefixLink(featuredEvent.path)}
        />
      </Section>

      <Section size="medium">
        <ItemList>
          {nonFeaturedEvents.map(event => {
            const hosts = getHosts(event.data.hosts, pages);
            return (
              <EventSmall
                key={hash(event)}
                date={event.data.date}
                title={event.data.title}
                venue={event.data.venue}
                hosts={hosts}
                text={event.data.intro || s(event.data.body).stripTags().s}
                attendLink={event.data.attendLink}
                eventLink={prefixLink(event.path)}
              />
            );
          })}
        </ItemList>
      </Section>

    </div>
  );
};

export default Events;

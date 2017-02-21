// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { prefixLink } from 'gatsby-helpers';
import { filterPages, getHosts } from '../lib/utilities';
import s from 'string';

import EventSmall from '../components/EventSmall';
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
  const events = filterPages(pages, 'events');
  const featuredEvent = events[0];
  const featuredEventHosts = getHosts(featuredEvent.data.hosts, pages);
  return (
    <div>
      <MastHead title="Events" subTitle="We run lots of great events" />

      <Section color="grey" size="medium">
        <FeaturedTag>
          Featured
        </FeaturedTag>
        <EventSmall
          key={featuredEvent.data.title}
          date={featuredEvent.data.date}
          title={featuredEvent.data.title}
          venue={featuredEvent.data.venue}
          hosts={featuredEventHosts}
          text={featuredEvent.data.intro || featuredEvent.data.body}
          eventLink={prefixLink(featuredEvent.path)}
        />
      </Section>

      <Section size="medium">
        {events.map((event, i) => {
          const hosts = getHosts(event.data.hosts, pages);
          return (
            <EventSmall
              key={event.data.title + event.data.date}
              style={{ marginTop: i !== 0 ? '7rem' : 0 }}
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
      </Section>

    </div>
  );
};

export default Events;

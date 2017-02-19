// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { prefixLink } from 'gatsby-helpers';
import { filterPages, getPerson } from '../lib/utilities';

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
  const featuredEventHosts = featuredEvent.data.hosts.map(host =>
    getPerson(pages, host));
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
          location={{
            title: featuredEvent.data.location,
            link: featuredEvent.data.locationLink,
          }}
          hosts={featuredEventHosts}
          text={featuredEvent.data.intro}
          attendLink={featuredEvent.data.attendLink}
          eventLink={prefixLink(featuredEvent.path)}
        />
      </Section>

      <Section size="medium">
        {events.map((event, i) => {
          const hosts = event.data.hosts.map(host => getPerson(pages, host));
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
              attendLink={featuredEvent.data.attendLink}
              eventLink={prefixLink(featuredEvent.path)}
            />
          );
        })}
      </Section>

    </div>
  );
};

export default Events;

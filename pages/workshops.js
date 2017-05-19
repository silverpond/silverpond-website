// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import hash from 'object-hash';
import { chunk } from 'lodash';
import { prefixLink } from 'gatsby-helpers';
import s from 'string';
import {
  filterNot,
  filterPagesByCategory,
  findFeaturedPages,
  getHosts,
} from '../lib/utilities';

import WorkshopSmall from '../components/WorkshopSmall';
import Helmet from '../components/Helmet';
import ItemList from '../components/ItemList';
import MastHead from '../components/MastHead';
import Section from '../components/Section';
import Tag from '../components/Tag';

const FeaturedTag = styled(Tag)`
  margin-bottom: 2rem;
`;



// Component
const Workshops = (
  {
    route: { pages },
  }: {
    route: Object,
  },
) => {
  const activeWorkshops = filterPagesByCategory(pages, 'workshops').filter(
    w => w.data.active === true,
  );
  const priorWorkshops = filterPagesByCategory(pages, 'workshops').filter(
    // TODO: Check the date?
    w => w.data.active === false,
  );
  return (
    <div>
      <Helmet title="Workshops" />
      <MastHead title="Workshops" subTitle="We run a series of workshops on Deep Learning" />

      <Section color="grey" size="medium">

      {activeWorkshops.map(ws => {
        const hosts = getHosts(ws.data.hosts, pages);
        return (
        <WorkshopSmall
            key={hash(ws)}
            attendLink={ws.data.attendLink}
            body={ws.data.body}
            hosts={hosts}
            dates={ws.data.dates}
            title={ws.data.title}
            venue={ws.data.venue}
        />);
      })}
      </Section>

      <Section size="medium">
        <ItemList>
        {priorWorkshops.map(ws => {
            const hosts = getHosts(ws.data.hosts, pages);
            return (
            <WorkshopSmall
                key={hash(ws)}
                attendLink={ws.data.attendLink}
                hosts={hosts}
                dates={ws.data.dates}
                body={ws.data.body}
                title={ws.data.title}
                venue={ws.data.venue}
            />
            );
        })}
        </ItemList>
      </Section>
    </div>
  );
};

export default Workshops;

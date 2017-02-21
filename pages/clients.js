// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { palette, typeStyles } from '../lib/settings';
import { filterPages } from '../lib/utilities';

import IntroText from '../components/IntroText';
import MastHead from '../components/MastHead';
import Section from '../components/Section';

const Intro = styled(IntroText)`
  margin-bottom: 5rem;
  max-width: 700px;
`;

// Component
const Clients = (
  {
    route: { pages },
  }: {
    route: Object,
  },
) => {
  const clients = filterPages(pages, 'clients');
  return (
    <div>
      <MastHead title="Events" subTitle="We run lots of great events" />

      <Section size="medium">
        <Intro>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim mi, vulputate nec tincidunt quis, finibus id ex. Quisque venenatis rhoncus odio, eu ornare tortor pretium sit amet. Sed tincidunt maximus felis a dictum. Donec eu vestibulum sapien. Ut tempus id enim ut auctor. Suspendisse congue lacus ultrices tellus faucibus semper. pretium sit amet. Sed tincidunt maximus felis a dictum. Donec eu vestibulum sapien. Ut tempus id enim ut auctor. Suspendisse congue lacus ultrices tellus faucibus semper.
        </Intro>

        {clients.map(client => {
          return (
            <div key={client.data.name}>
              {client.data.name}
            </div>
          );
        })}
      </Section>

    </div>
  );
};

export default Clients;

// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { filterPagesByCategory, imagePath } from '../lib/utilities';

import Client from '../components/Client';
import Helmet from '../components/Helmet';
import IntroText from '../components/IntroText';
import ItemList from '../components/ItemList';
import MastHead from '../components/MastHead';
import Section from '../components/Section';
import StartProjectBanner from '../components/StartProjectBanner';

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
  const clients = filterPagesByCategory(pages, 'clients');
  return (
    <div>
      <Helmet title="Clients" />
      <MastHead title="Clients" subTitle="We have lots of great clients" />

      <Section size="medium">
        <Intro>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          enim mi, vulputate nec tincidunt quis, finibus id ex. Quisque
          venenatis rhoncus odio, eu ornare tortor pretium sit amet. Sed
          tincidunt maximus felis a dictum. Donec eu vestibulum sapien. Ut
          tempus id enim ut auctor. Suspendisse congue lacus ultrices tellus
          faucibus semper. pretium sit amet. Sed tincidunt maximus felis a
          dictum. Donec eu vestibulum sapien. Ut tempus id enim ut auctor.
          Suspendisse congue lacus ultrices tellus faucibus semper.
        </Intro>

        <ItemList>
          {clients.map(client => {
            return (
              <Client
                key={client.data.name}
                image={imagePath(client.path, client.data.image)}
                name={client.data.name}
                body={client.data.body}
              />
            );
          })}
        </ItemList>
      </Section>

      <StartProjectBanner />
    </div>
  );
};

export default Clients;

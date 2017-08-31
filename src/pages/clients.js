// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

import { filterPagesByCategory, getImageUrl } from 'lib/utilities';

import Client from 'components/Client';
import Helmet from 'components/Helmet';
import IntroText from 'components/IntroText';
import ItemList from 'components/ItemList';
import MastHead from 'components/MastHead';
import Section from 'components/Section';
import StartProjectBanner from 'components/StartProjectBanner';

const Intro = styled(IntroText)`
  margin-bottom: 5rem;
  max-width: 700px;
`;

// Component
const Clients = ({ data }: { data: Object }) => {
  const pages = data.allMarkdownRemark.edges.map(edge => {
    const { frontmatter, html, timeToRead } = edge.node;
    return { ...frontmatter, timeToRead, body: html };
  });

  const clients = filterPagesByCategory(pages, 'clients');

  return (
    <div>
      <Helmet title="Clients" />
      <MastHead title="Clients" subTitle="We have lots of great clients" />

      <Section size="medium">
        <Intro>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim mi, vulputate
          nec tincidunt quis, finibus id ex. Quisque venenatis rhoncus odio, eu ornare tortor
          pretium sit amet. Sed tincidunt maximus felis a dictum. Donec eu vestibulum sapien. Ut
          tempus id enim ut auctor. Suspendisse congue lacus ultrices tellus faucibus semper.
          pretium sit amet. Sed tincidunt maximus felis a dictum. Donec eu vestibulum sapien. Ut
          tempus id enim ut auctor. Suspendisse congue lacus ultrices tellus faucibus semper.
        </Intro>

        <ItemList>
          {clients.map(client => {
            return (
              <Client
                key={client.path}
                name={client.name}
                body={client.body}
                imageUrl={getImageUrl(client.image)}
              />
            );
          })}
        </ItemList>
      </Section>

      <StartProjectBanner />
    </div>
  );
};

export const pageQuery = graphql`
  query ClientsQuery {
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

export default Clients;

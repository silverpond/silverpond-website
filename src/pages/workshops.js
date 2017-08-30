// @flow
// Imports - config
import React from 'react';
import hash from 'object-hash';

import { filterPagesByCategory, getHosts } from 'lib/utilities';

import WorkshopSmall from 'components/WorkshopSmall';
import Helmet from 'components/Helmet';
import ItemList from 'components/ItemList';
import MastHead from 'components/MastHead';
import Section from 'components/Section';

const Workshop = (workshop: Object) => {
  const hosts = []; // getHosts(workshop.hosts, pages);
  return (
    <WorkshopSmall
      key={hash(workshop)}
      attendLink={workshop.attendLink}
      body={workshop.body}
      hosts={hosts}
      dates={workshop.dates}
      title={workshop.title}
      venue={workshop.venue}
    />
  );
};

// Component
const Workshops = ({ data }: { data: Object }) => {
  const pages = data.allMarkdownRemark.edges.map(edge => {
    const { frontmatter, html, timeToRead } = edge.node;
    return { ...frontmatter, timeToRead, body: html };
  });

  const workshops = filterPagesByCategory(pages, 'workshops');
  const activeWorkshops = workshops.filter(w => w.active === true);
  const priorWorkshops = workshops.filter(w => w.active === false);

  return (
    <div>
      <Helmet title="Workshops" />
      <MastHead title="Workshops" subTitle="Come join us at one of our Deep Learning workshops" />
      <Section color="grey" size="medium">
        {activeWorkshops.map(Workshop)}
      </Section>
      <Section size="medium">
        <ItemList>{priorWorkshops.map(Workshop)}</ItemList>
      </Section>
    </div>
  );
};

export const pageQuery = graphql`
  query WorkshopsQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          timeToRead
          frontmatter {
            active
            attendLink
            dates
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

export default Workshops;

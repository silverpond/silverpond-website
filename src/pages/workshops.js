// @flow
// Imports - config
import React from 'react';
import moment from 'moment';

import { getHosts } from 'lib/utilities';

import WorkshopSmall from 'components/WorkshopSmall';
import Helmet from 'components/Helmet';
import ItemList from 'components/ItemList';
import MastHead from 'components/MastHead';
import Section from 'components/Section';

function hasFinished(dates: Array<Date>): boolean {
  const today = new Date();
  return dates.every(date => moment(date).isBefore(today));
}

const Workshop = (workshop: Object, people: Array<Object>) => {
  const hosts = getHosts(workshop.hosts, people);
  return (
    <WorkshopSmall
      key={workshop.path}
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
  const workshops = data.workshops.edges.map(edge => {
    const { frontmatter, html } = edge.node;
    return { ...frontmatter, body: html };
  });

  const people = data.people.edges.map(edge => edge.node.frontmatter);

  const activeWorkshops = workshops.filter(w => !hasFinished(w.dates));
  const priorWorkshops = workshops.filter(w => hasFinished(w.dates));

  return (
    <div>
      <Helmet title="Workshops" />
      <MastHead title="Workshops" subTitle="Come join us at one of our Deep Learning workshops" />
      {activeWorkshops.length > 0 && (
        <Section color="grey" size="medium">
          {activeWorkshops.map(workshop => Workshop(workshop, people))}
        </Section>
      )}
      {priorWorkshops.length > 0 && (
        <Section size="medium">
          <ItemList>{priorWorkshops.map(workshop => Workshop(workshop, people))}</ItemList>
        </Section>
      )}
    </div>
  );
};

export const pageQuery = graphql`
  query WorkshopsQuery {
    workshops: allMarkdownRemark(filter: { frontmatter: { category: { eq: "workshops" } } }) {
      edges {
        node {
          html
          frontmatter {
            attendLink
            dates
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

export default Workshops;

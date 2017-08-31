// @flow
// Imports - config
import React from 'react';
import moment from 'moment';

import { filterPagesByCategory, getHosts } from 'lib/utilities';

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
  const pages = data.allMarkdownRemark.edges.map(edge => {
    const { frontmatter, html, timeToRead } = edge.node;
    return { ...frontmatter, timeToRead, body: html };
  });

  const people = filterPagesByCategory(pages, 'people');
  const workshops = filterPagesByCategory(pages, 'workshops');
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

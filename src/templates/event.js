// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { palette, type, typeStyles } from 'lib/settings';
import { getHosts, mapLink, getImageUrl } from 'lib/utilities';

import Address from 'components/Address';
import Avatar from 'components/Avatar';
import Button from 'components/Button';
import MastHead from 'components/MastHead';
import MastHeadMap from 'components/MastHeadMap';
import PostMeta from 'components/PostMeta';
import Section from 'components/Section';
import TextContent from 'components/TextContent';
import TextLink from 'components/TextLink';

const EventHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const DateTime = styled.div`
  ${typeStyles('h4')};
  font-weight: ${type.weights.normal};
  line-height: 1;
`;

const Title = styled.h2`
  ${typeStyles('h2')};
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.h4`
  ${typeStyles('small')};
  color: ${palette.grey.base};
  font-weight: ${type.weights.medium};
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const AddressWrapper = styled.div`margin: 2rem 0;`;

const Hosts = styled.div`
  display: flex;

  & > * + * {
    margin-left: 4rem;
  }
`;

// Component
const Event = ({ data }: { data: Object }) => {
  if (!data.event) return null;

  const { frontmatter, html } = data.event;
  const { attendLink, date, draft, hosts, title, venue } = frontmatter;

  const people = data.people.edges.map(edge => edge.node.frontmatter);
  const hostRecords = getHosts(hosts, people);

  return (
    <div>
      <PostMeta title={title} draft={draft} />
      <MastHeadMap lat={venue.lat} lng={venue.lng} />
      <Section size="small" style={{ padding: '4rem 0' }}>
        <EventHeader>
          <div>
            <Title>
              {title}
              {draft ? ' - Draft' : ''}
            </Title>
            <DateTime>{moment(date).format('D MMM YYYY - LT')}</DateTime>
          </div>
          <Button to={attendLink} target="_blank" hasArrow>
            Attend
          </Button>
        </EventHeader>
        <TextContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </TextContent>
        <AddressWrapper>
          <SubTitle>Location</SubTitle>
          <Address {...venue} style={{ marginTop: '-0.5rem' }} />
        </AddressWrapper>
        {hostRecords.length > 0 && (
          <div>
            <SubTitle>Hosted by</SubTitle>
            <Hosts>
              {hostRecords.map(host => (
                <Avatar key={host.name} name={host.name} imageUrl={getImageUrl(host.image)} />
              ))}
            </Hosts>
          </div>
        )}
      </Section>
    </div>
  );
};

export const pageQuery = graphql`
  query EventQuery($path: String!) {
    event: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        title
        attendLink
        date
        draft
        hosts
        image {
          childImageSharp {
            responsiveSizes {
              src
            }
          }
        }
        venue {
          name
          lat
          lng
          address
          city
          country
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

export default Event;

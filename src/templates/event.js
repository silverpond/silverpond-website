// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import dateformat from 'dateformat';

import { palette, type, typeStyles } from 'lib/settings';
import { textBlock } from 'lib/styles';
import { getHosts, mapLink, getImageUrl } from 'lib/utilities';
import type { Page } from 'lib/type-defs';

// Imports - components
import Avatar from 'components/Avatar';
import Button from 'components/Button';
import MastHead from 'components/MastHead';
import MastHeadMap from 'components/MastHeadMap';
import PostMeta from 'components/PostMeta';
import Section from 'components/Section';
import TextLink from 'components/TextLink';

const Body = styled.div`${textBlock} margin-bottom: 4rem;`;

const Title = styled.div`${typeStyles('h2')} margin-bottom: 1.5rem;`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DateTime = styled.div`
  align-items: baseline;
  display: flex;
`;

const Date = styled.h4`${typeStyles('h3')} margin-right: 1rem;`;

const Time = styled.p`
  ${typeStyles('h4')} font-weight: ${type.weights.normal};
  margin-bottom: 1rem;
`;

const SubTitle = styled.h4`
  ${typeStyles('small')} color: ${palette.grey.base};
  font-weight: ${type.weights.medium};
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const Hosts = styled.div`
  display: flex;

  & > * + * {
    margin-left: 2rem;
  }
`;

const renderLocation = (venue = {}) => {
  const link = mapLink(venue);
  return link ? (
    <TextLink to={mapLink(venue)} target="_blank">
      {venue.name}
    </TextLink>
  ) : null;
};

// Component
const Event = ({ data }: { data: Object }) => {
  const event = data.markdownRemark;
  const hosts = null;
  const hostRecords = [];
  const venue = null;

  const { attendLink, date, draft, title } = event.frontmatter;

  // const hostRecords = getHosts(hosts, pages);
  return (
    <div>
      <PostMeta title={title} draft={draft} />
      {venue ? <MastHeadMap lat={venue.lat} lon={venue.lng} /> : <MastHead title={title} />}
      <Section size="small" style={{ paddingTop: '2rem' }}>
        <Title>{title}</Title>
        <Meta>
          <DateTime>
            <Date>{dateformat(date, 'd mmm')}</Date>
            <Time>{dateformat(date, 'h:Mtt')}</Time>
          </DateTime>
          <Button to={attendLink} target="_blank" hasArrow>
            Attend event
          </Button>
        </Meta>
        {renderLocation(venue)}
        <Body dangerouslySetInnerHTML={{ __html: event.html }} />
        {!!hosts &&
        hosts.length > 0 && (
          <div>
            <SubTitle>Hosted by</SubTitle>
            <Hosts>
              {hostRecords.map(host => {
                if (host != null) {
                  return (
                    <Avatar key={host.name} name={host.name} imageUrl={getImageUrl(host.image)} />
                  );
                }
                return null;
              })}
            </Hosts>
          </div>
        )}
      </Section>
    </div>
  );
};

export const pageQuery = graphql`
  query EventQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
      }
    }
  }
`;

export default Event;

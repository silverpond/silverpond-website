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
import TextContent from 'components/TextContent';
import TextLink from 'components/TextLink';

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DateTime = styled.div`
  align-items: flex-end;
  display: flex;
  height: 42px;
`;

const Date = styled.h4`
  ${typeStyles('h3')};
  line-height: 1;
  margin-right: 1rem;
`;

const Time = styled.p`
  ${typeStyles('h4')};
  font-weight: ${type.weights.normal};
  line-height: 1;
  margin-bottom: 0;
`;

const SubTitle = styled.h4`
  ${typeStyles('small')};
  color: ${palette.grey.base};
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
  const hostRecords = [];
  const venue = null;

  const { attendLink, date, draft, title } = event.frontmatter;

  // const hostRecords = getHosts(hosts, pages);
  return (
    <div>
      <PostMeta title={title} draft={draft} />
      {venue ? <MastHeadMap lat={venue.lat} lon={venue.lng} /> : <MastHead title={title} />}
      <Section size="small" style={{ padding: '4rem 0' }}>
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
        <TextContent>
          <div dangerouslySetInnerHTML={{ __html: event.html }} />
        </TextContent>
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

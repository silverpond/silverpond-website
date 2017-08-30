// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import dateformat from 'dateformat';
import string from 'string';
import hash from 'object-hash';
import Link from 'gatsby-link';

import { palette, type, typeStyles } from 'lib/settings';
import { textBlock } from 'lib/styles';
import { mapLink, getImageUrl } from 'lib/utilities';

import Avatar from 'components/Avatar';
import Button from 'components/Button';
import MediaBlock from 'components/MediaBlock';
import TextLink from 'components/TextLink';

const Date = styled.h4`
  color: ${palette.grey.base}
  font-size: 4rem;
  font-weight: ${type.weights.bold};
  line-height: 4.5rem;
  white-space: nowrap;
`;

const Time = styled.p`
  ${typeStyles('h4')} color: ${palette.grey.base} font-weight: ${type.weights.normal};
  margin-bottom: 1rem;
`;

const Location = styled(TextLink)`white-space: nowrap;`;

const AttendButton = styled(Button)`
  margin-top: 1.5rem;
  width: 100%;
`;

const Title = styled(Link)`${typeStyles('h3')} display: block;`;

const Text = styled.p`
  margin-bottom: 2rem;
  max-width: 800px;
`;

const Body = styled.div`
  ${textBlock} ul li {
    margin-left: 3rem;
    list-style-type: circle;
  }

  h3 {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h4`
  ${typeStyles('small')} color: ${palette.grey.base};
  font-weight: ${type.weights.bold};
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
    <Location to={mapLink(venue)} target="_blank">
      {venue.name}
    </Location>
  ) : null;
};

// Component
const WorkshopSmall = ({
  attendLink,
  dates,
  eventLink,
  hosts,
  body,
  title,
  venue,
}: {
  attendLink?: string,
  dates: Array<any>,
  eventLink: string,
  hosts?: Array<any>,
  style?: Object,
  body: string,
  title: string,
  venue: {
    name: string,
    lat: string,
    lng: string,
    address: string,
    city: string,
    country: string,
  },
}) => {
  return (
    <MediaBlock
      aside={
        <div>
          {dates.map(date => {
            return (
              <div key={hash(date) + hash('div')}>
                <Date key={hash(date) + hash('date')}>{dateformat(date, 'd mmm')}</Date>
                <Time key={hash(date) + hash('time')}>{dateformat(date, 'h:MMtt')}</Time>
              </div>
            );
          })}
          {renderLocation(venue)}
          {!!attendLink && (
            <AttendButton to={attendLink} target="_blank" size="small">
              Attend event
            </AttendButton>
          )}
        </div>
      }
    >
      <Title to={eventLink}>{title}</Title>
      <Body dangerouslySetInnerHTML={{ __html: body }} />
      {!!hosts &&
      hosts.length > 0 && (
        <div>
          <SubTitle>Hosted by</SubTitle>
          <Hosts>
            {hosts.map(host => {
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
    </MediaBlock>
  );
};

export default WorkshopSmall;

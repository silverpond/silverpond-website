// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import dateformat from 'dateformat';
import string from 'string';
import Link from 'gatsby-link';

import { palette, type, typeStyles } from 'lib/settings';
import { mapLink, getImageUrl } from 'lib/utilities';

import Avatar from 'components/Avatar';
import Button from 'components/Button';
import MediaBlock from 'components/MediaBlock';
import TextLink from 'components/TextLink';

const Date = styled.h4`
  color: ${palette.grey.base};
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

const Title = styled(Link)`
  ${typeStyles('h3')};
  display: block;
`;

const Text = styled.p`
  margin-bottom: 2rem;
  max-width: 800px;
`;

const SubTitle = styled.h4`
  ${typeStyles('small')};
  color: ${palette.grey.base};
  font-weight: ${type.weights.bold};
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const Hosts = styled.div`
  display: flex;

  & > * + * {
    margin-left: 4rem;
  }
`;

// Component
const EventSmall = ({
  attendLink,
  date,
  eventLink,
  hosts,
  text,
  title,
  venue,
}: {
  attendLink?: string,
  date: string,
  eventLink: string,
  hosts?: Array<any>,
  style?: Object,
  text: string,
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
  const link = mapLink(venue);
  return (
    <MediaBlock
      aside={
        <div>
          <Date>{dateformat(date, 'd mmm')}</Date>
          <Time>{dateformat(date, 'h:MMtt')}</Time>
          {link ? (
            <Location to={link} target="_blank">
              {venue.name}
            </Location>
          ) : null}
          {attendLink ? (
            <AttendButton to={attendLink} target="_blank" size="small">
              Attend event
            </AttendButton>
          ) : null}
        </div>
      }
    >
      <Title to={eventLink}>{title}</Title>
      <Text>{string(text).truncate(300).s}</Text>
      {hosts &&
      hosts.length > 0 && (
        <div>
          <SubTitle>Hosted by</SubTitle>
          <Hosts>
            {hosts.map(host => {
              return host ? (
                <Avatar key={host.name} name={host.name} imageUrl={getImageUrl(host.image)} />
              ) : null;
            })}
          </Hosts>
        </div>
      )}
    </MediaBlock>
  );
};

export default EventSmall;

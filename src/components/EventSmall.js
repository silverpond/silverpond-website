// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import string from 'string';
import Link from 'gatsby-link';

import { breakpoints, palette, type, typeStyles } from 'lib/settings';
import { mapLink, getImageUrl } from 'lib/utilities';

import Avatar from 'components/Avatar';
import Button from 'components/Button';
import { Col, ColWrapper } from 'components/Grid';

const Date = styled.h4`
  color: ${palette.grey.base};
  font-size: 4rem;
  font-weight: ${type.weights.bold};
  line-height: 4.5rem;
  white-space: nowrap;

  @media (min-width: ${breakpoints.small}) {
    margin-bottom: 0.5rem;
  }
`;

const Time = styled.p`
  ${typeStyles('h4')};
  color: ${palette.grey.base};
  font-weight: ${type.weights.normal};
`;

const AttendButton = styled(Button)`
  margin-top: 2.5rem;
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
  flex-direction: column;

  & > * {
    margin-bottom: 1rem;
  }

  @media (min-width: ${breakpoints.small}) {
    flex-direction: row;

    & > * {
      margin-bottom: 0;
      margin-right: 4rem;
    }
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
  hosts?: Array<Object>,
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
    <ColWrapper>
      <Col span={3}>
        <div>
          <Date>{moment(date).format('D MMM')}</Date>
          <Time>{moment(date).format('LT')}</Time>
          {attendLink ? (
            <AttendButton to={attendLink} target="_blank" size="small">
              Attend event
            </AttendButton>
          ) : null}
        </div>
      </Col>
      <Col span={9}>
        <Title to={eventLink}>{title}</Title>
        <Text>{string(text).truncate(300).s}</Text>
        {hosts &&
        hosts.length > 0 && (
          <div>
            <SubTitle>Hosted by</SubTitle>
            <Hosts>
              {hosts.map(host => (
                <Avatar key={host.name} name={host.name} imageUrl={getImageUrl(host.image)} />
              ))}
            </Hosts>
          </div>
        )}
      </Col>
    </ColWrapper>
  );
};

export default EventSmall;

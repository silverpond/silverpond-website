// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Link from 'gatsby-link';

import { palette, type, typeStyles } from 'lib/settings';
import { mapLink, getImageUrl } from 'lib/utilities';

import Address from 'components/Address';
import Avatar from 'components/Avatar';
import Button from 'components/Button';
import MediaBlock from 'components/MediaBlock';
import TextContent from 'components/TextContent';
import TextLink from 'components/TextLink';

const Date = styled.h4`
  color: ${palette.grey.base};
  font-size: 4rem;
  font-weight: ${type.weights.bold};
  line-height: 4.5rem;
  white-space: nowrap;
`;

const Time = styled.p`
  ${typeStyles('h4')};
  color: ${palette.grey.base};
  font-weight: ${type.weights.normal};
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
    margin-left: 2rem;
  }
`;

// Component
const WorkshopSmall = ({
  attendLink,
  dates,
  hosts,
  body,
  title,
  venue,
}: {
  attendLink?: string,
  dates: Array<any>,
  hosts?: Array<any>,
  style?: Object,
  body: string,
  title: string,
  venue: {
    name: string,
    lat: number,
    lng: number,
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
              <div key={date}>
                <Date>{moment(date).format('D MMM')}</Date>
                <Time>{moment(date).format('LT')}</Time>
              </div>
            );
          })}
          {venue && <Address {...venue} />}
          {!!attendLink && (
            <AttendButton to={attendLink} target="_blank" size="small">
              Attend
            </AttendButton>
          )}
        </div>
      }
    >
      <Title>{title}</Title>
      <TextContent>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </TextContent>
      {!!hosts &&
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
    </MediaBlock>
  );
};

export default WorkshopSmall;

// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import dateformat from 'dateformat';
import { palette, type, typeStyles } from '../lib/settings';

import { Link } from 'react-router';
import Avatar from '../components/Avatar';
import Button from '../components/Button';
import TextLink from '../components/TextLink';

const Container = styled.div`
  display: flex;
`;

const Aside = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-right: 4rem;
  width: 15rem;
`;

const Main = styled.div`
  display: block;
`;

const Date = styled.h4`
  ${typeStyles('h1')}
  color: ${palette.grey.base}
  font-weight: ${type.weights.bold};
  white-space: nowrap;
`;

const Time = styled.p`
  ${typeStyles('h4')}
  color: ${palette.grey.base}
  font-weight: ${type.weights.normal};
  margin-bottom: 1rem;
`;

const Location = styled(TextLink)`
  white-space: nowrap;
`;

const AttendButton = styled(Button)`
  margin-top: 1.5rem;
`;

const Title = styled(Link)`
  ${typeStyles('h3')}
  display: block;
  padding-top: 1.25rem;
`;

const Text = styled.p`
  margin-bottom: 2rem;
  max-width: 800px;
`;

const SubTitle = styled.h4`
  ${typeStyles('small')}
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

// Component
const EventSmall = (
  {
    attendLink,
    date,
    eventLink,
    hosts,
    location,
    style,
    text,
    title,
  }: {
    attendLink?: string,
    date: string,
    eventLink: string,
    hosts?: Array<any>,
    location: {
      title: string,
      link: string,
    },
    style?: Object,
    text: string,
    title: string,
  },
) => {
  return (
    <Container style={style}>
      <Aside>
        <Date>
          {dateformat(date, 'd mmm')}
        </Date>
        <Time>
          {dateformat(date, 'h:Mtt')}
        </Time>
        <Location to={location.link} target="_blank">
          {location.title}
        </Location>
        <AttendButton to={attendLink} target="_blank">
          Attend event
        </AttendButton>
      </Aside>

      <Main>
        <Title to={eventLink}>
          {title}
        </Title>
        <Text>
          {text}
        </Text>
        {!!hosts &&
          hosts.length > 0 &&
          <div>
            <SubTitle>
              Hosted by
            </SubTitle>
            <Hosts>
              {hosts.map(host => {
                if (host != null) {
                  return (
                    <Avatar
                      key={host.data.name}
                      name={host.data.name}
                      image={host.data.image}
                    />
                  );
                }
                return null;
              })}
            </Hosts>
          </div>}
      </Main>
    </Container>
  );
};

export default EventSmall;

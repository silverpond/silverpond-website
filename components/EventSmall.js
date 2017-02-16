// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import dateformat from 'dateformat';
import { palette, type, typeStyles } from '../lib/settings';

import Avatar from '../components/Avatar';
import TextLink from '../components/TextLink';

const Container = styled.div`
  display: flex;
`;

const Aside = styled.div`
  margin-right: 4rem;
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

const Title = styled.h4`
  ${typeStyles('h3')}
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
    date,
    hosts,
    location,
    style,
    text,
    title,
  }: {
    date: string,
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
      </Aside>

      <Main>
        <Title>
          {title}
        </Title>
        <Text>
          {text}
        </Text>
        {!!hosts &&
          <div>
            <SubTitle>
              Hosted by
            </SubTitle>
            <Hosts>
              {hosts.map(host => {
                return (
                  <Avatar
                    key={host.data.name}
                    name={host.data.name}
                    image={host.data.image}
                  />
                );
              })}
            </Hosts>
          </div>}
      </Main>
    </Container>
  );
};

export default EventSmall;

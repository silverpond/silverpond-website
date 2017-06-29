// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import dateformat from 'dateformat';
import { palette, type, typeStyles } from 'lib/settings';
import { textBlock } from 'lib/styles';
import { getHosts, mapLink, imagePath } from 'lib/utilities';
import type { Page } from 'lib/type-defs';

// Imports - components
import Avatar from 'components/Avatar';
import Button from 'components/Button';
import Header from 'components/Header';
import MastHeadMap from 'components/MastHeadMap';
import PostMeta from 'components/PostMeta';
import Section from 'components/Section';
import TextLink from 'components/TextLink';

const Head = styled.div`
  margin-bottom: 4rem;
`;

const Body = styled.div`
  ${textBlock};
  margin-bottom: 4rem;
`;

const Title = styled.div`
  ${typeStyles('h2')};
  margin-bottom: 1.5rem;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DateTime = styled.div`
  align-items: baseline;
  display: flex;
`;

const Date = styled.h4`
  ${typeStyles('h3')};
  margin-right: 1rem;
`;

const Time = styled.p`
  ${typeStyles('h4')};
  font-weight: ${type.weights.normal};
  margin-bottom: 1rem;
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

// Component
const Event = ({
  route: {
    pages,
    page: { data: { attendLink, body, date, draft, hosts, title, venue } },
  },
}: {
  route: {
    pages: Page[],
    page: {
      data: {
        attendLink?: string,
        body: string,
        date: string,
        draft?: boolean,
        hosts: string[],
        title: string,
        venue: {
          name: string,
          lat: string,
          lon: string,
          address: string,
          city: string,
          country: string,
        },
      },
    },
  },
}) => {
  const hostRecords = getHosts(hosts, pages);
  return (
    <div>
      <PostMeta title={title} draft={draft} />
      <Header />
      {!!venue && <MastHeadMap lat={venue.lat} lon={venue.lon} />}

      <Section size="small">
        <Head>
          <Title>
            {title}
          </Title>
          <Meta>
            <DateTime>
              <Date>
                {dateformat(date, 'd mmm')}
              </Date>
              <Time>
                {dateformat(date, 'h:Mtt')}
              </Time>
            </DateTime>
            <Button to={attendLink} target="_blank" hasArrow>
              Attend event
            </Button>
          </Meta>
          {!!venue &&
            <TextLink to={mapLink(venue)} target="_blank">
              {venue.name}
            </TextLink>}
        </Head>

        <Body dangerouslySetInnerHTML={{ __html: body }} />

        {!!hosts &&
          hosts.length > 0 &&
          <div>
            <SubTitle>
              Hosted by
            </SubTitle>
            <Hosts>
              {hostRecords.map(host => {
                if (host != null) {
                  return (
                    <Avatar
                      key={host.data.name}
                      name={host.data.name}
                      image={imagePath(host.path, host.data.image)}
                    />
                  );
                }
                return null;
              })}
            </Hosts>
          </div>}

      </Section>
    </div>
  );
};

export default Event;

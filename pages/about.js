// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import hash from 'object-hash';
import { chunk } from 'lodash';
import { typeStyles } from '../lib/settings';
import { textBlock } from '../lib/styles';
import { filterPages, imagePath } from '../lib/utilities';

import Header from '../components/Header';
import Inner from '../components/Inner';
import PersonSmall from '../components/PersonSmall';
import SplashImage from '../components/SplashImage';
import { ColWrapper, Col } from '../components/Grid';
import Section from '../components/Section';

const Title = styled.h2`
  ${typeStyles('h1')}
  margin-bottom: 3rem;
`;

const Body = styled.div`
  ${textBlock}
  margin-bottom: 5rem;
`;

const SubTitle = styled.h4`
  ${typeStyles('h2')}
  margin-bottom: 2.5rem;
`;

// min-width hack - bug in styled-components where only having `&` rules
// mis-compiles styles (min-width in this context is meaningless).
const PeopleRow = styled(ColWrapper)`
  min-width: 0;
  & + & {
    margin-top: 5rem;
  }
`;

// Component
const About = (
  {
    route: { pages },
  }: {
    route: Object,
  },
) => {
  const people = filterPages(pages, 'people').filter(
    person => person.data.teamMember === true,
  );
  return (
    <div>
      <Header />
      <SplashImage src="/images/team.jpg" />
      <Section>
        <Inner size="small">
          <Title>
            We are Silverpond!
          </Title>
          <Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              enim mi, vulputate nec tincidunt quis, finibus id ex. Quisque
              venenatis rhoncus odio, eu ornare tortor pretium sit amet. Sed
              tincidunt maximus felis a dictum. Donec eu vestibulum sapien. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim
              mi, vulputate nec tincidunt quis, finibus id ex. Quisque venenatis
              rhoncus odio, eu ornare tortor pretium sit amet. Sed tincidunt
              maximus felis a dictum. Donec eu vestibulum sapien.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              enim mi, vulputate nec tincidunt quis, finibus id ex. Quisque
              venenatis rhoncus odio, eu ornare tortor pretium sit amet. Sed
              tincidunt maximus felis a dictum. Donec eu vestibulum sapien. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim
              mi, vulputate nec tincidunt quis, finibus id ex. Quisque venenatis
              rhoncus odio, eu ornare tortor pretium sit amet. Sed tincidunt
              maximus felis a dictum. Donec eu vestibulum sapien.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              enim mi, vulputate nec tincidunt quis, finibus id ex. Quisque
              venenatis rhoncus odio, eu ornare tortor pretium sit amet. Sed
              tincidunt maximus felis a dictum. Donec eu vestibulum sapien. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim
              mi, vulputate nec tincidunt quis, finibus id ex. Quisque venenatis
              rhoncus odio, eu ornare tortor pretium sit amet. Sed tincidunt
              maximus felis a dictum. Donec eu vestibulum sapien.
            </p>
          </Body>

          <SubTitle>
            Meet the team
          </SubTitle>

          {chunk(people, 3).map(row => {
            return (
              <PeopleRow key={hash(row)}>
                {row.map(person => {
                  return (
                    <Col span="4" key={hash(person)}>
                      <PersonSmall
                        name={person.data.name}
                        description={person.data.role}
                        image={imagePath(person.path, person.data.image)}
                      />
                    </Col>
                  );
                })}
              </PeopleRow>
            );
          })}

        </Inner>
      </Section>
    </div>
  );
};

export default About;

// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { chunk } from 'lodash';

import { typeStyles } from 'lib/settings';
import { textBlock } from 'lib/styles';
import { filterPagesByCategory, getImageUrl, staticAssetPath } from 'lib/utilities';

import Header from 'components/Header';
import Helmet from 'components/Helmet';
import PersonSmall from 'components/PersonSmall';
import Section from 'components/Section';
import SplashImage from 'components/SplashImage';
import { ColWrapper, Col } from 'components/Grid';

const Title = styled.h2`${typeStyles('h1')} margin-bottom: 3rem;`;

const Body = styled.div`${textBlock} margin-bottom: 5rem;`;

const SubTitle = styled.h4`${typeStyles('h2')} margin-bottom: 2.5rem;`;

// min-width hack - bug in styled-components where only having `&` rules
// mis-compiles styles (min-width in this context is meaningless).
const PeopleRow = styled(ColWrapper)`
  min-width: 0;
  & + & {
    margin-top: 5rem;
  }
`;

// Component
const About = ({ data }: { data: Object }) => {
  const pages = data.allMarkdownRemark.edges.map(edge => {
    const { frontmatter, html, timeToRead } = edge.node;
    return { ...frontmatter, timeToRead, body: html };
  });

  const people = filterPagesByCategory(pages, 'people');
  const teamMembers = people.filter(person => person.teamMember);

  return (
    <div>
      <Helmet title="About" />
      <Header
        style={{
          backgroundColor: 'rgba(242, 81, 70, .75)',
          borderBottom: 0,
          color: 'white',
          position: 'absolute',
          width: '100%',
        }}
      />
      <SplashImage src={staticAssetPath('team.jpg')} />
      <Section size="small">
        <Title>We are Silverpond!</Title>
        <Body>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim mi, vulputate
            nec tincidunt quis, finibus id ex. Quisque venenatis rhoncus odio, eu ornare tortor
            pretium sit amet. Sed tincidunt maximus felis a dictum. Donec eu vestibulum sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim mi, vulputate
            nec tincidunt quis, finibus id ex. Quisque venenatis rhoncus odio, eu ornare tortor
            pretium sit amet. Sed tincidunt maximus felis a dictum. Donec eu vestibulum sapien.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim mi, vulputate
            nec tincidunt quis, finibus id ex. Quisque venenatis rhoncus odio, eu ornare tortor
            pretium sit amet. Sed tincidunt maximus felis a dictum. Donec eu vestibulum sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim mi, vulputate
            nec tincidunt quis, finibus id ex. Quisque venenatis rhoncus odio, eu ornare tortor
            pretium sit amet. Sed tincidunt maximus felis a dictum. Donec eu vestibulum sapien.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim mi, vulputate
            nec tincidunt quis, finibus id ex. Quisque venenatis rhoncus odio, eu ornare tortor
            pretium sit amet. Sed tincidunt maximus felis a dictum. Donec eu vestibulum sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim mi, vulputate
            nec tincidunt quis, finibus id ex. Quisque venenatis rhoncus odio, eu ornare tortor
            pretium sit amet. Sed tincidunt maximus felis a dictum. Donec eu vestibulum sapien.
          </p>
        </Body>
        <SubTitle>Meet the team</SubTitle>
        {chunk(teamMembers, 3).map((row, index) => {
          return (
            <PeopleRow key={index}>
              {row.map(person => {
                return (
                  <Col span="4" key={person.name}>
                    <PersonSmall
                      name={person.name}
                      description={person.role}
                      imageUrl={getImageUrl(person.image)}
                    />
                  </Col>
                );
              })}
            </PeopleRow>
          );
        })}
      </Section>
    </div>
  );
};

export const pageQuery = graphql`
  query AboutQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            category
            image {
              childImageSharp {
                responsiveSizes {
                  src
                }
              }
            }
            name
            path
            role
            teamMember
          }
        }
      }
    }
  }
`;

export default About;

// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { prefixLink } from 'gatsby-helpers';
import { typeStyles } from '../lib/settings';

import { ColWrapper, Col } from '../components/Grid';
import ArrowLink from '../components/ArrowLink';
import Section from '../components/Section';

const Title = styled.h3`
  ${typeStyles('h2')}
`;

const SubTitle = styled.h4`
  margin-top: 2.5rem;
`;

const Image = styled.img`
  width: 100%;
`;

// Component
const InfoSection = (
  {
    caseStudyLink,
    color,
    image,
    imageDescription,
    reversed,
    text,
    title,
  }: {
    caseStudyLink?: string,
    color?: string,
    image: string,
    imageDescription: string,
    reversed?: boolean,
    text: string,
    title: string,
  },
) => {
  return (
    <Section size="medium" color={color}>
      <ColWrapper reversed={reversed}>
        <Col span="5">
          <Image src={prefixLink(image)} alt={imageDescription} />
        </Col>
        <Col span="7">
          <Title>
            {title}
          </Title>
          <p>
            {text}
          </p>
          <SubTitle>
            Case study
          </SubTitle>
          <ArrowLink to={prefixLink(caseStudyLink)}>
            Deep learing in the power industry
          </ArrowLink>
        </Col>
      </ColWrapper>
    </Section>
  );
};

export default InfoSection;

// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

import type { SectionColor } from 'lib/type-defs';
import { typeStyles } from 'lib/settings';

import { ColWrapper, Col } from 'components/Grid';
import ArrowLink from 'components/ArrowLink';
import Section from 'components/Section';

const Title = styled.h3`${typeStyles('h3')};`;

const SubTitle = styled.h4`margin-top: 2.5rem;`;

const Image = styled.img`width: 100%;`;

// Component
const InfoSection = ({
  caseStudy,
  color,
  image,
  imageDescription,
  reversed,
  text,
  title,
}: {
  caseStudy?: {
    link: string,
    title: string,
  },
  color?: SectionColor,
  image: string,
  imageDescription: string,
  reversed?: boolean,
  text: string,
  title: string,
}) => {
  return (
    <Section color={color}>
      <ColWrapper reversed={reversed}>
        <Col span="5">
          <Image src={image} alt={imageDescription} />
        </Col>
        <Col span="7">
          <Title>{title}</Title>
          <p>{text}</p>
          {!!caseStudy && (
            <div>
              <SubTitle>Case study</SubTitle>
              <ArrowLink to={caseStudy.link}>{caseStudy.title}</ArrowLink>
            </div>
          )}
        </Col>
      </ColWrapper>
    </Section>
  );
};

export default InfoSection;

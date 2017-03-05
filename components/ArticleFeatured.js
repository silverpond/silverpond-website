// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import string from 'string';
import { typeStyles } from '../lib/settings';

// Components
import { ColWrapper, Col } from '../components/Grid';
import ArrowLink from '../components/ArrowLink';
import TagBase from '../components/Tag';

const Title = styled.h3`
  ${typeStyles('h1')}
  margin-bottom: 2rem;
`;

const Image = styled.img`
  max-height: 25rem;
  object-fit: cover;
  width: 100%;
`;

const Tag = styled(TagBase)`
  margin-bottom: 1.5rem;
`;

// Component
const CaseStudySmall = (
  {
    image,
    tag,
    text,
    title,
    to,
  }: {
    image: string,
    tag: string,
    text: string,
    title: string,
    to: string,
  },
) => {
  return (
    <div>
      <ColWrapper>
        <Col span="6">
          <Tag>
            {tag}
          </Tag>
          <Title>
            {title}
          </Title>
          <p>
            {string(text).truncate(250).s}
          </p>
          <ArrowLink to={to}>
            Find out more
          </ArrowLink>
        </Col>
        <Col span="6">
          <Image src={image} />
        </Col>
      </ColWrapper>
    </div>
  );
};

export default CaseStudySmall;

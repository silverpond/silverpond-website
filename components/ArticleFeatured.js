// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import string from 'string';
import { typeStyles } from '../lib/settings';

// Components
import { ColWrapper, Col } from '../components/Grid';
import { Link } from 'react-router';
import ArrowLink from '../components/ArrowLink';
import TagBase from '../components/Tag';

const Title = styled(Link)`
  ${typeStyles('h3')}
  display: block;
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
          <Title to={to}>
            {title}
          </Title>
          <p>
            {!!text && string(text).truncate(250).s}
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

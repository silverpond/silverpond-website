// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import string from 'string';
import Link from 'gatsby-link';

import { typeStyles } from 'lib/settings';

import { ColWrapper, Col } from 'components/Grid';
import ArrowLink from 'components/ArrowLink';
import TagBase from 'components/Tag';

const Title = styled(Link)`
  ${typeStyles('h3')} display: block;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  max-height: 25rem;
  object-fit: cover;
  width: 100%;
`;

const Tag = styled(TagBase)`margin-bottom: 1.5rem;`;

const ArticleFeatured = ({
  imageUrl,
  tag,
  text,
  title,
  to,
}: {
  imageUrl: string,
  tag: string,
  text: string,
  title: string,
  to: string,
}) => {
  return (
    <div>
      <ColWrapper>
        <Col span="6">
          <Tag>{tag}</Tag>
          <Title to={to}>{title}</Title>
          <p>{text ? string(text).truncate(250).s : null}</p>
          <ArrowLink to={to}>Find out more</ArrowLink>
        </Col>
        <Col span="6">
          <Image src={imageUrl} />
        </Col>
      </ColWrapper>
    </div>
  );
};

export default ArticleFeatured;

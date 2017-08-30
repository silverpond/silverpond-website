// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

import { typeStyles } from 'lib/settings';
import { textBlock } from 'lib/styles';

import MediaBlock from 'components/MediaBlock';

const Logo = styled.img`width: 100%;`;

const Title = styled.h3`${typeStyles('h3')};`;

const Body = styled.div`${textBlock};`;

// Component
const Client = ({ body, imageUrl, name }: { body: string, imageUrl: string, name: string }) => {
  return (
    <MediaBlock aside={<Logo src={imageUrl} />}>
      <Title>{name}</Title>
      <Body dangerouslySetInnerHTML={{ __html: body }} />
    </MediaBlock>
  );
};

export default Client;

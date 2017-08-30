// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

import { typeStyles, type } from 'lib/settings';

const Container = styled.div`
  align-items: center;
  display: flex;
`;

const Image = styled.img`
  border: solid 3px white;
  border-radius: 50%;
  margin-right: 1.5rem;
  width: 5rem;
`;

const Name = styled.p`${typeStyles('small')} font-weight: ${type.weights.medium};`;

// Component
const Avatar = ({ name, imageUrl }: { name: string, imageUrl: string }) => {
  return (
    <Container>
      <Image src={imageUrl} />
      <Name>{name}</Name>
    </Container>
  );
};

export default Avatar;

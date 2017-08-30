// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

import { palette } from 'lib/settings';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  margin-bottom: 2.5rem;
  width: 100%;
`;

const Name = styled.h5`margin: 0;`;

const Description = styled.p`
  margin: 0;
  text-align: center;
`;

const Spacer = styled.div`
  background-color: ${palette.red.base};
  height: 0.25rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  width: 7rem;
`;

// Component
const PersonSmall = ({
  description,
  imageUrl,
  name,
}: {
  description: string,
  imageUrl: string,
  name: string,
}) => {
  return (
    <Container>
      <Image src={imageUrl} />
      <Name>{name}</Name>
      <Spacer />
      <Description>{description}</Description>
    </Container>
  );
};

export default PersonSmall;

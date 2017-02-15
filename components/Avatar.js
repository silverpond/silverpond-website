// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { prefixLink } from 'gatsby-helpers';
import { typeStyles } from '../lib/settings';

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

const Name = styled.p`
  ${typeStyles('small')}
`;

// Component
const Avatar = (
  {
    name,
    image,
  }: {
    name: string,
    image: string,
  },
) => {
  return (
    <Container>
      <Image src={prefixLink(`/images/people/${image}`)} />
      <Name>
        {name}
      </Name>
    </Container>
  );
};

export default Avatar;
// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { palette, type, typeStyles } from '../lib/settings';

const Container = styled.div`
  align-items: center;
  background-color: ${palette.red.base};
  color: white;
  display: flex;
  flex-direction: column;
  height: 40rem;
  justify-content: center;

  &:after {
    background-image: url('/images/silverpond-logo.svg');
    background-position: -150px 0;
    background-repeat: no-repeat;
    background-size: 4000px;
    content: "";
    display: block;
    height: 100%;
    opacity: .1;
    position: absolute;
    width: 100%;
  }
`;

const Title = styled.h2`
  ${typeStyles('h1')};
  margin-bottom: 3rem;
`;

const SubTitle = styled.h3`
  ${typeStyles('h3')};
  font-weight: ${type.weights.normal};
`;

// Component
const MastHead = (
  {
    title,
    subTitle,
  }: {
    title: string,
    subTitle: string,
  },
) => {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <SubTitle>
        {subTitle}
      </SubTitle>
    </Container>
  );
};

export default MastHead;

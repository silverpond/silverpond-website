// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { prefixLink } from 'gatsby-helpers';
import { palette, type, typeStyles } from '../lib/settings';

import Header from '../components/Header';

export const settings = {
  height: '40rem',
};

const Container = styled.div`
  background-color: ${palette.red.base};
  color: white;
  display: flex;
  flex-direction: column;
  height: ${settings.height};

  &:after {
    background-image: url('${prefixLink('/images/silverpond-logo.svg')}');
    background-position: -150px 0;
    background-repeat: no-repeat;
    background-size: 4000px;
    content: "";
    display: block;
    height: ${settings.height};
    opacity: .1;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const Body = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
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
      <Header
        style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
        onDark
      />
      <Body>
        <Title>
          {title}
        </Title>
        <SubTitle>
          {subTitle}
        </SubTitle>
      </Body>
    </Container>
  );
};

export default MastHead;

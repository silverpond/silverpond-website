// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

import { palette, type, typeStyles } from 'lib/settings';
import { staticAssetPath } from 'lib/utilities';

import Header from 'components/Header';

export const settings = {
  height: '40rem',
};

const Container = styled.div`height: ${settings.height};`;

const Inner = styled.div`
  background-color: ${palette.red.base};
  color: white;
  display: flex;
  flex-direction: column;
  height: ${settings.height};
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
`;

const BackgroundColor = styled.div`
  background-image: url('${staticAssetPath('silverpond-logo.svg')}');
  background-position: -150px 0;
  background-repeat: no-repeat;
  background-size: 4000px;
  content: '';
  display: block;
  height: ${settings.height};
  opacity: 0.1;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
`;

const BackgroundImage = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  content: '';
  display: block;
  filter: contrast(50%);
  height: ${settings.height};
  opacity: 0.33;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Body = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin: 0 auto;
  max-width: 75rem;
  position: relative;
  text-align: center;
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
const MastHead = ({
  title,
  subTitle,
  imageUrl,
}: {
  title: string,
  subTitle?: string,
  imageUrl?: string,
}) => {
  return (
    <Container>
      <Inner>
        {imageUrl ? (
          <BackgroundImage style={{ backgroundImage: `url('${imageUrl}')` }} />
        ) : (
          <BackgroundColor />
        )}
        <Header style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }} onDark />
        <Body>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </Body>
      </Inner>
    </Container>
  );
};

export default MastHead;

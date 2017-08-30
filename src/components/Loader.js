// @flow
// Imports - config
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes
const pulse = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
`;

// Styled components
const Svg = styled.svg`
  display: block;
  height: 100%;

  & > *:nth-child(1) {
    animation: ${pulse} 2s infinite cubic-bezier(0, 0, 0.4, 1.2);
  }

  & > *:nth-child(2) {
    animation: ${pulse} 2s infinite cubic-bezier(0, 0, 0.4, 1.2) .5s;
  }
`;

const Blip = styled.circle`
  fill: rgba(255, 255, 255, .5);
  transform-origin: center;
`;

// Component
const Loader = () => {
  return (
    <Svg viewBox="0 0 100 100">
      <Blip cx="50" cy="50" r="50" />
      <Blip cx="50" cy="50" r="50" />
    </Svg>
  );
};

export default Loader;

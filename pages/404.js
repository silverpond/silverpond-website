// @flow
// Imports - config
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { palette } from 'lib/settings';

import MastHead from 'components/MastHead';

const spin = keyframes`
  from {
    transform: translateY(20rem) rotate(0deg) scale(0);
    opacity: 0;
  }

  to {
    transform: translateY(0) rotate(1080deg) scale(1);
    opacity: 1;
  }
`;

const Shrug = styled.div`
  animation: ${spin} 1s ease-out;
  color: ${palette.slate.lighter};
  font-size: 10rem;
  line-height: 10rem;
  margin: 5rem 0;
  text-align: center;
  transform-origin: center;
`;

// Component
const FourOhFour = () => {
  return (
    <div>
      <MastHead
        title="Oh dear..."
        subTitle="We couldn't find what you were looking for"
      />
      <Shrug>
        ¯\_(ツ)_/¯
      </Shrug>
    </div>
  );
};

export default FourOhFour;

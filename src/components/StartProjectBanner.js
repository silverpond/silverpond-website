// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

import { breakpoints, type, typeStyles } from 'lib/settings';

import Button from 'components/Button';
import Section from 'components/Section';

// Styled components
const Title = styled.h3`
  ${typeStyles('h3')};
  color: white;
  font-weight: ${type.weights.bold};
  margin-bottom: 2.5rem;

  @media (min-width: ${breakpoints.small}) {
    ${typeStyles('h1')};
    margin-bottom: 2.5rem;
  }
`;

// Component
const StartProject = () => {
  return (
    <Section color="red" centeredContent>
      <Title>Start a project with us today!</Title>
      <Button to="mailto:hello@silverpond.com.au" color="white" size="large" hasArrow>
        Contact us
      </Button>
    </Section>
  );
};

export default StartProject;

// @flow
/* eslint-disable no-mixed-operators */
import styled from 'styled-components';

export const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 750px) {
    flex-direction: ${({ reversed }) => (reversed ? 'row-reverse' : 'row')};
  }
`;

export const Col = styled.div`
  margin-bottom: 2rem;
  padding: 0 1rem;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 750px) {
    margin-bottom: 0;
    padding: 0 2rem;
    width: ${props => props.span / 12 * 100}%;
  }
`;

// @flow
/* eslint-disable no-mixed-operators */
import styled from 'styled-components';

export const ColWrapper = styled.div`
  display: flex;
  flex-direction: ${({ reversed }) => (reversed ? 'row-reverse' : 'row')};
`;

export const Col = styled.div`
  padding: 0 2rem;
  width: ${props => props.span / 12 * 100}%;
`;

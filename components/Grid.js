// @flow
/* eslint-disable no-mixed-operators */
import styled from 'styled-components';
import { media } from '../lib/style-utils';

const spacing = '5rem';

// const calcSpanPercentage = (): string => {
//   return `${colSpan / 12 * 100}%`;
// };

export const ColWrapper = styled.div`
  display: flex;
  flex-direction: ${({ reversed }) => reversed ? 'row-reverse' : 'row'}
  margin-left: -${spacing}
 `;

export const Col = styled.div`
padding-left: ${spacing};
width: ${props => props.span / 12 * 100}%;
`;

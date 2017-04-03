// @flow
/* eslint-disable no-mixed-operators */
import styled from 'styled-components';
import { media } from '../lib/styles';

const spacing = '5rem';

const calcSpanPercentage = (colSpan: number): string => {
  return `${colSpan / 12 * 100}%`;
};

export const ColWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.reversed ? 'row-reverse' : 'row'};
  margin-left: -${spacing};

  ${media.small`
    flex-direction: ${props => props.sm ? props.sm : 'row'};
  `}
`;

export const Col = styled.div`
  padding-left: ${spacing};
  width: ${props => calcSpanPercentage(props.lg)};

  ${media.small`
    width: ${props => calcSpanPercentage(props.sm)};
  `}
`;

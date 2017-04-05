// @flow
/* eslint-disable no-mixed-operators */
import styled from 'styled-components';
import { media } from '../lib/style-utils';

const spacing = '5rem';

const calcSpanPercentage = (colSpan: number): string => {
  return `${(colSpan / 12) * 100}%`;
};

export const ColWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.reversed ? 'row-reverse' : 'row' };
  margin-left: -${spacing};

  ${ media.extrasmall`
    flex-direction: ${props => props.xs ? props.xs : 'row' };
  `}
  ${ media.small`
    flex-direction: ${props => props.sm ? props.sm : 'row' };
  `}
  ${ media.medium`
    flex-direction: ${props => props.md ? props.md : 'row' };
  `}
 `;

export const Col = styled.div`
  padding-left: ${spacing};
  width: ${props => calcSpanPercentage(props.lg)};
  // outline: 1px dashed #CCC;

  ${ media.extrasmall`
      width: ${props => calcSpanPercentage(props.xs)};
  `}

  ${ media.small`
      width: ${props => calcSpanPercentage(props.sm)};
  `}

  ${ media.medium`
      width: ${props => calcSpanPercentage(props.md)};
  `}

`;

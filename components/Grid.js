// @flow
/* eslint-disable no-mixed-operators */
import styled from 'styled-components';
import { media } from 'lib/styles';

const spacing = '5rem';

const calcSpanPercentage = (colSpan: number): string => {
  return `${colSpan / 12 * 100}%`;
};

const columnStyles = props => {
  if (props.sm === 'column') {
    return `
      flex-direction: column;
      margin-left: 0;

      & > div {
        padding-left: 0;
      }

      & > div + div {
        padding-top: 4rem;
      }
    `;
  }
  return undefined;
};

export const ColWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.reversed ? 'row-reverse' : 'row'};
  margin-left: -${spacing};

  & > div {
    padding-left: ${spacing};
  }

  ${media.small`
    ${props => columnStyles(props)}
  `}
`;

export const Col = styled.div`
  width: ${props => calcSpanPercentage(props.lg)};

  ${media.small`
    width: ${props => calcSpanPercentage(props.sm)};
  `}
`;

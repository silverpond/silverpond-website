// @flow
/* eslint-disable no-mixed-operators */
import styled from 'styled-components';

const spacing = '5rem';


export const ColWrapper = styled.div`
  display: flex;
  flex-direction: ${({ reversed }) => reversed ? 'row-reverse' : 'row'}
  margin-left: -${spacing}
  flex-direction: column;

  @media (min-width:768px){
    flex-direction: row;
  }
`;

// export const Col = styled.div`
//   padding-left: ${spacing};
//   width: ${props => props.span / 12 * 100}%;
// `;
export const Col = styled.div`
padding-left: ${spacing};
width: ${props => props.span / 12 * 100}%;
`;

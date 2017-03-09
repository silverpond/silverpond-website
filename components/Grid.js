// @flow
import styled from 'styled-components';

const spacing = '5rem';

export const ColWrapper = styled.div`
  display: flex;
  flex-direction: ${({ reversed }) => reversed ? 'row-reverse' : 'row'}
  margin-left: -${spacing}
`;

export const Col = styled.div`
  padding-left: ${spacing};
  width: ${props => props.span / 12 * 100}%;
`;

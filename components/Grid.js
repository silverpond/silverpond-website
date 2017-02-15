// @flow
import styled from 'styled-components';

const spacing = '5rem';

export const ColWrapper = styled.div`
  display: flex;
  margin-left: -${spacing}
`;

export const Col = styled.div`
  flex-grow: 1;
  padding-left: ${spacing};
  width: ${props => props.span / 12 * 100}%;
`;

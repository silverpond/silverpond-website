// @flow
import styled from 'styled-components';

type Size = 'medium' | 'small';

const widthStyles = (width: string): string => {
  return `
    width: ${width};
    @media (max-width: ${width}) {
      width: 100%;
    }
  `;
};

const getWidths = (size: Size): string => {
  switch (size) {
    case 'small':
      return widthStyles('700px');
    case 'medium':
      return widthStyles('950px');
    default:
      return widthStyles('1175px');
  }
};

const Inner = styled.div`
  ${props => getWidths(props.size)}
  margin: 0 auto;
`;

export default Inner;

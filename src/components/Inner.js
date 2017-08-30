import styled from 'styled-components';

type Size = 'medium';

const getSize = (size: Size): string => {
  switch (size) {
    case 'small':
      return '800px';
    case 'medium':
      return '950px';
    default:
      return '1175px';
  }
};

const Inner = styled.div`
  margin: 0 auto;
  max-width: ${props => getSize(props.size)};
`;

export default Inner;

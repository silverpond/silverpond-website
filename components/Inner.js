import styled from 'styled-components';

type Size = 'medium';

const getSize = (size: Size): string => {
  switch (size) {
    case 'medium':
      return '700px';
    default:
      return '1175px';
  }
};

const Inner = styled.div`
  margin: 0 auto;
  width: ${props => getSize(props.size)};
`;

export default Inner;

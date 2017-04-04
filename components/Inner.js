import styled from 'styled-components';
import { media } from '../lib/style-utils';
type Size = 'medium';

const getSize = (size: Size): string => {
  switch (size) {
    case 'small':
      return '700px';
    case 'medium':
      return '950px';
    default:
      return '1175px';
  }
};

const Inner = styled.div`
margin: 0 auto;
width: 100%;
 ${ media.desktop`
   margin: 0 auto;
   width: ${props => getSize(props.size)};
  `}
`;

export default Inner;

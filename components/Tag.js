// Imports - config
import styled from 'styled-components';
import { palette, type, typeStyles } from 'lib/settings';

// Component
const Tag = styled.h4`
  ${typeStyles('h5')}
  color: ${palette.grey.base}
  display: inline-block;
  font-weight: ${type.weights.bold};
  line-height: 3rem;
  position: relative;
  text-transform: uppercase;

  &:before {
    background-color: ${palette.grey.base}
    content: "";
    display: block;
    height: 3px;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export default Tag;

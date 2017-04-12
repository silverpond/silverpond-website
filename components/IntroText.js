// Imports - config
import styled from 'styled-components';
import { typeStyles } from 'lib/settings';
import { media } from 'lib/styles';

// Component
const IntroText = styled.p`
  ${typeStyles('h4')}
  font-weight: 500;
  line-height: 2.5rem;

  ${media.small`
    ${typeStyles('h5')}
    line-height: 2.25rem;
  `}
`;

export default IntroText;

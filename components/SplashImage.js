// @flow
// Imports - config
import styled from 'styled-components';
import { settings as mastHeadSettings } from '../components/MastHead';
import { media } from 'lib/styles';

// Component
const SplashImage = styled.img`
  height: ${mastHeadSettings.height}
  object-fit: cover;
  width: 100%;

  ${media.small`
    height: 20rem;
  `}
`;

export default SplashImage;

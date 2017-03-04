// @flow
// Imports - config
import styled from 'styled-components';
import { settings as mastHeadSettings } from '../components/MastHead';

// Component
const SplashImage = styled.img`
  height: ${mastHeadSettings.height};
  margin-bottom: 4rem;
  object-fit: cover;
  width: 100%;
`;

export default SplashImage;

// @flow
// Imports - config
import styled from 'styled-components';
import { Link } from 'react-router';

// Component
const LogoLink = styled(Link)`
  background-image: ${props =>
  props.onDark
    ? "url('/images/silverpond-logo.svg')"
    : "url('/images/silverpond-logo-dark.svg')"};
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  height: 30px;
  width: 160px;
`;

export default LogoLink;

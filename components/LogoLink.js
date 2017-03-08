// @flow
// Imports - config
import styled from 'styled-components';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';

const getImageUrl = onDark => {
  return onDark
    ? "url('/images/silverpond-logo.svg')"
    : "url('/images/silverpond-logo-dark.svg')";
};

// Component
const LogoLink = styled(Link)`
  background-image: ${props => prefixLink(getImageUrl(props.onDark))};
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  height: 30px;
  width: 160px;
`;

export default LogoLink;

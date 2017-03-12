// @flow
// Imports - config
import styled from 'styled-components';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';

const getImageUrl = onDark => {
  return onDark
    ? '/images/silverpond-logo.svg'
    : '/images/silverpond-logo-dark.svg';
};

// Component
const LogoLink = styled(Link)`
  background-image: url('${props => prefixLink(getImageUrl(props.onDark))}');
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  height: 40px;
  width: 195px;
`;

export default LogoLink;

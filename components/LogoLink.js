// @flow
// Imports - config
import styled from 'styled-components';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';

const getImageUrl = dark => {
  return dark
    ? '/images/silverpond-logo-dark.svg'
    : '/images/silverpond-logo.svg';
};

// Component
const LogoLink = styled(Link)`
  background-image: url('${props => prefixLink(getImageUrl(props.dark))}');
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  height: 40px;
  width: 195px;
`;

export default LogoLink;

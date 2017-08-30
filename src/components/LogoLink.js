// @flow
import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { staticAssetPath } from 'lib/utilities';

const getImageUrl = ({ onDark }: { onDark: boolean }) => {
  return staticAssetPath(`silverpond-logo${onDark ? '-dark' : ''}.svg`);
};

const StyledLink = styled(Link)`
  background-image: url('${getImageUrl}');
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  height: 40px;
  width: 195px;
`;

const LogoLink = () => <StyledLink exact to="/" />;

export default LogoLink;

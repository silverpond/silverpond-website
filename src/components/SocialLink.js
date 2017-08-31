import React from 'react';
import styled from 'styled-components';

import { staticAssetPath } from 'lib/utilities';

const IconLink = styled.a`
  background-size: contain;
  cursor: pointer;
  display: block;
  transition: opacity 0.2s;
  height: 2rem;
  width: 2rem;

  &:hover {
    opacity: 0.66;
  }
`;

const SocialLink = ({ href, icon }: { href: string, icon: string }) => {
  const image = `${staticAssetPath(icon)}.svg`;
  return <IconLink href={href} style={{ background: `url('${image}') no-repeat center` }} />;
};

export default SocialLink;

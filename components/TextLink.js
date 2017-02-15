// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { Link as LinkBase } from 'react-router';
import { linkUnderline } from '../lib/styles';

// Component
const Link = styled(LinkBase)`
  ${linkUnderline}
`;

const Anchor = styled.a`
  ${linkUnderline}
`;

const TextLink = (
  {
    children,
    to,
    ...props
  }: {
    children?: React.Element<any>,
    to: string,
    props: Object,
  },
) => {
  return to.includes('http')
    ? <Anchor href={to} {...props}>{children}</Anchor>
    : <Link to={to} {...props}>{children}</Link>;
};

export default TextLink;

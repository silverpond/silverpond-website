// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { Link as LinkBase } from 'react-router';
import { linkUnderline } from '../lib/styles';

const Link = styled(LinkBase)`
  ${linkUnderline}
`;

const Anchor = styled.a`
  ${linkUnderline}
`;

// Component
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
  return to.includes('http') || to.includes('mailto')
    ? <Anchor href={to} {...props}>{children}</Anchor>
    : <Link to={to} {...props}>{children}</Link>;
};

export default TextLink;

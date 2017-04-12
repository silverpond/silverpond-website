// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { type } from '../lib/settings';
import { media } from 'lib/styles';

type SmallModifier = 'hidden';

type NavItemType = {
  name: string,
  href?: string,
  link?: string,
  options?: Object,
};

const smallStyleModifiers = SmallModifier => {
  if (SmallModifier === 'hidden') {
    return media.small`
      display: none;
    `;
  }
};

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  ${props => smallStyleModifiers(props.sm)}
`;

const NavItem = styled.li`
  color: ${props => props.white ? 'white' : 'inherit'};
  font-weight: ${type.weights.medium};
  margin: 0 2rem;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  ${media.small`
    margin: .25rem 2rem !important;
  `}
`;

// Component
const Nav = (
  {
    style,
    white,
    sm,
  }: {
    style?: Object,
    white?: boolean,
    sm?: SmallModifier,
  },
) => {
  const items = [
    { name: 'About', link: '/about/' },
    {
      name: 'Co-working',
      href: 'http://silverpond.com.au/the_pond/',
      options: { target: '_blank', rel: 'noopener noreferrer' },
    },
    { name: 'Articles', link: '/articles/' },
    { name: 'Events', link: '/events/' },
    { name: 'Clients', link: '/clients/' },
    { name: 'Deep learning', link: '/deep-learning/' },
    { name: 'Contact', href: '#footer' },
  ];
  return (
    <Container style={style} sm={sm}>
      {items.map((item: NavItemType) => {
        return (
          <NavItem key={item.name} white={white}>
            {item.hasOwnProperty('href')
              ? <a href={item.href} {...item.options}>
                  {item.name}
                </a>
              : <Link to={!!item.link && prefixLink(item.link)}>
                  {item.name}
                </Link>}
          </NavItem>
        );
      })}
    </Container>
  );
};

export default Nav;

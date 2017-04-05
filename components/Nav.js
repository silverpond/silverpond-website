// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { type } from '../lib/settings';
import { media } from '../lib/style-utils';

type NavItemType = {
  name: string,
  href?: string,
  link?: string,
  options?: Object,
};
//TODO: Fix the ul for responsive xs and sm sizes. for now just display none (add a sandwich menu)
const Container = styled.ul`
  display: flex;
 ${ media.extrasmall`
    display: none;
  `}
 ${ media.small`
    display: none;
  `}
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

  ${ media.extrasmall`

   `}

`;

// Component
const Nav = (
  {
    style,
    white,
  }: {
    style?: Object,
    white?: boolean,
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
    { name: 'Training', link: '/training/' },
    { name: 'Clients', link: '/clients/' },
    { name: 'Deep learning', link: '/deep-learning/' },
    { name: 'Contact', href: '#footer' },
  ];
  return (
    <Container style={style}>
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

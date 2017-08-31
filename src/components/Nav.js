// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { type } from 'lib/settings';

type NavItemType = {
  name: string,
  href?: string,
  link?: string,
  options?: Object,
};

const Container = styled.ul`display: flex;`;

const NavItem = styled.li`
  color: white;
  font-weight: ${type.weights.medium};
  margin: 0 2rem;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const items = [
  { name: 'About', link: '/about/' },
  { name: 'Events', link: '/events/' },
  { name: 'Co-working', link: '/the-pond/' },
  { name: 'Workshops', link: '/workshops/' },
  { name: 'Contact', href: '#footer' },
];

// Component
const Nav = ({ style }: { style?: Object }) => {
  return (
    <Container style={style}>
      {items.map((item: NavItemType) => {
        return (
          <NavItem key={item.name}>
            {item.hasOwnProperty('href') ? (
              <a href={item.href} {...item.options}>
                {item.name}
              </a>
            ) : (
              <Link to={!!item.link && item.link}>{item.name}</Link>
            )}
          </NavItem>
        );
      })}
    </Container>
  );
};

export default Nav;

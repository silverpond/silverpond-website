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
  color: ${props => (props.white ? 'white' : 'inherit')};
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
  { name: 'Articles', link: '/articles/' },
  { name: 'Events', link: '/events/' },
  { name: 'Clients', link: '/clients/' },
  { name: 'Deep learning', link: '/deep-learning/' },
  { name: 'Workshops', link: '/workshops/' },
  {
    name: 'Co-working',
    href: 'http://silverpond.com.au/the_pond/',
    options: { target: '_blank', rel: 'noopener noreferrer' },
  },
  { name: 'Contact', href: '#footer' },
];

// Component
const Nav = ({
  style,
  white,
  without,
}: {
  style?: Object,
  white?: boolean,
  without?: Array<string>,
}) => {
  const unwantedItems = without || [];
  const wantedItems = items.filter(i => !unwantedItems.includes(i.name));
  return (
    <Container style={style}>
      {wantedItems.map((item: NavItemType) => {
        return (
          <NavItem key={item.name} white={white}>
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

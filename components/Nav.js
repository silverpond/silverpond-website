// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

const Container = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  color: ${props => props.white ? 'white' : 'inherit'};
  margin: 0 2rem;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

// Component
const Nav = (
  {
    style,
    white,
  }: {
    style: Object,
    white?: boolean,
  },
) => {
  const items = [
    { name: 'About', link: '/about' },
    { name: 'Co-working', link: 'http://silverpond.com.au/the_pond/' },
    { name: 'Articles', link: '/articles' },
    { name: 'Events', link: '/events' },
    { name: 'Training', link: '/training' },
    { name: 'Clients', link: '/clients' },
    { name: 'Contact', link: '/contact' },
  ];
  return (
    <Container style={style}>
      {items.map(({ name, link }) => {
        return (
          <NavItem key={name} white={white}>
            {link.includes('http')
              ? <a href={link} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              : <Link to={prefixLink(link)}>{name}</Link>}
          </NavItem>
        );
      })}
    </Container>
  );
};

export default Nav;

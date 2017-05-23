// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { palette } from 'lib/settings';
import { media } from 'lib/styles';

type NavItemType = {
  name: string,
  href?: string,
  link?: string,
  options?: Object,
};

const Container = styled.div`
  backgroundColor: ${palette.slate.base};
  bottom: 0;
  display: none;
  max-width: 90%;
  padding: 2rem;
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  z-index: 1;

  ${media.small`
    display: block;
  `}
`;

const Nav = styled.ul`
  
`;

const NavItem = styled.li`
  text-align: right;
`;

// Component
class MobileNav extends React.Component {
  state: {
    active: boolean,
  };

  constructor() {
    super();
    this.state = {
      active: false,
    };
  }

  render() {
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
      <Container>
        <p>
          X
        </p>
        <Nav>
          {items.map((item: NavItemType) => {
            return (
              <NavItem key={item.name}>
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
        </Nav>
      </Container>
    );
  }
}

export default MobileNav;

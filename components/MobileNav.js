// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { palette } from 'lib/settings';
import { media } from 'lib/styles';
import { range } from 'lodash';

import MenuIcon from 'components/MenuIcon';

type NavItemType = {
  name: string,
  href?: string,
  link?: string,
  options?: Object,
};

const Container = styled.div`
  display: none;

  ${media.small`
    display: block;
  `}
`;

const MenuButton = styled.button`
  background: none;
  border: 0;
  padding: 0;
  position: relative;
  z-index: 10;
`;

const Nav = styled.ul`
  background-color: ${palette.slate.base};
  bottom: 0;
  max-width: 90vw;
  padding: 2rem;
  padding-top: 6rem;
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  z-index: 1;
  transition: all .2s ease;
  transform: translateX(100%);

  ${props => (props.active ? activeNavStyles : '')}
`;

const navItemTransitionDelays = () => {
  return range(0, 10).map(i => {
    return `
      &:nth-child(${i}) {
        transition-delay: ${i * 0.1}s;
      }
    `;
  });
};

const activeNavStyles = `
  transform: translateX(0);

  li {
    opacity: 1;
    transform: translateY(0);
    ${navItemTransitionDelays()}
  }
`;

const NavItem = styled.li`
  text-align: right;
  transform: translateY(250px);
  transition: all .3s cubic-bezier(0, 0, 0, 1);
  opacity: 0;

  & + & {
    margin-top: 1rem;
  }
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

  handleClick = () => {
    this.setState({ active: !this.state.active });
  };

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

        <MenuButton onClick={this.handleClick}>
          <MenuIcon active={this.state.active} />
        </MenuButton>

        <Nav active={this.state.active}>
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

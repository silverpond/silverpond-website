// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { palette, typeStyles } from 'lib/settings';
import { media } from 'lib/styles';
import { range } from 'lodash';
import navItems from 'lib/nav-items';

import MenuIcon from 'components/MenuIcon';
import CrossIcon from 'components/CrossIcon';

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
`;

const Nav = styled.ul`
  background-color: ${palette.slate.base};
  bottom: 0;
  color: white;
  display: flex;
  fill: white;
  flex-direction: column;
  padding: 2rem;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateY(100%);
  transition: all .2s ease;
  width: 100%;
  z-index: 1;

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
  ${typeStyles('h4')};
  color: white;
  text-align: center;
  transform: translateY(250px);
  transition: all .3s cubic-bezier(0, 0, 0, 1);
  opacity: 0;

  & + & {
    margin-top: 1rem;
  }
`;

const NavClose = styled.button`
  align-self: flex-end;
  background: transparent;
  border: 0;
  padding: 0;
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
    return (
      <Container>

        <MenuButton onClick={this.handleClick}>
          <MenuIcon active={this.state.active} />
        </MenuButton>

        <Nav active={this.state.active}>
          <NavClose onClick={this.handleClick}>
            <CrossIcon height="2rem" width="2rem" />
          </NavClose>
          {navItems.map((item: NavItemType) => {
            return (
              <NavItem key={item.name} onClick={this.handleClick}>
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

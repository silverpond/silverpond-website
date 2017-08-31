// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { type } from 'lib/settings';

const Container = styled.div`
  left: 0;
  position: fixed;
  top: 0;

  @media (min-width: 768px) {
    display: flex;
    position: relative;
  }
`;

const NavbarContainer = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavbarItem = styled.li`
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

const SideMenuContainer = styled.div`
  display: block;
  left: ${props => (props.isOpen ? 0 : '-9999px')};
  position: fixed;
  top: 0;
  transition: ${props => (props.isOpen ? 'left 0s linear 0s' : 'left 0s linear 0.4s')};
  width: 80vw;

  @media (min-width: 768px) {
    display: none;
  }
`;

const SideMenuOverlay = styled.div`
  background-color: black;
  bottom: 0;
  left: 0;
  opacity: ${props => (props.isOpen ? 0.88 : 0)};
  position: fixed;
  right: 0;
  transition: opacity 0.4s;
  top: 0;
`;

const SideMenuList = styled.ul`
  background-color: #eee;
  display: block;
  height: 100vh;
  max-width: 30rem;
  padding-top: 4rem;
  position: relative;
  transform: ${props => (props.isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-100vw, 0 ,0)')};
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  width: 100%;
  z-index: 2;
`;

const SideMenuItem = styled.li`
  border-bottom: 1px solid #ddd;
  display: block;
  padding: 1rem;
`;

const SideMenuOpen = styled.a`
  background-color: green;
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 2.75rem;
  position: relative;
  width: 2.75rem;
  z-index: 1;

  @media (min-width: 768px) {
    display: none;
  }
`;

const SideMenuClose = styled.a`
  background-color: red;
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 2.75rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 2.75rem;
`;

const items = [
  { name: 'About', link: '/about' },
  { name: 'Coworking', link: '/the-pond' },
  { name: 'Deep Learning', link: '/deep-learning' },
  { name: 'Events', link: '/events' },
  { name: 'Workshops', link: '/workshops' },
];

const Navbar = ({ styles }: { styles: Object }) => {
  return (
    <NavbarContainer style={styles}>
      {items.map(item => (
        <NavbarItem key={item.name}>
          <Link to={item.link}>{item.name}</Link>
        </NavbarItem>
      ))}
    </NavbarContainer>
  );
};

const SideNav = ({ isOpen, onToggle }: { isOpen: boolean, onToggle: () => void }) => {
  return (
    <Container>
      <SideMenuOpen onClick={onToggle} />
      <SideMenuContainer isOpen={isOpen}>
        <SideMenuOverlay isOpen={isOpen} />
        <SideMenuList isOpen={isOpen}>
          <SideMenuClose onClick={onToggle} />
          {items.map(item => (
            <SideMenuItem key={item.name}>
              <Link to={item.link}>{item.name}</Link>
            </SideMenuItem>
          ))}
        </SideMenuList>
      </SideMenuContainer>
    </Container>
  );
};

// Component
class Nav extends PureComponent {
  props: {
    styles?: Object,
  };

  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Container>
        <Navbar {...this.props} />
        <SideNav {...this.props} isOpen={isOpen} onToggle={this.handleToggle} />
      </Container>
    );
  }
}

export default Nav;

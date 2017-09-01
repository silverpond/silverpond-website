// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { breakpoints, type } from 'lib/settings';
import { staticAssetPath } from 'lib/utilities';

const Container = styled.div`
  left: 0;
  position: absolute;
  top: 0;
  z-index: 1;

  @media (min-width: ${breakpoints.small}) {
    display: flex;
    position: relative;
  }
`;

const NavbarContainer = styled.ul`
  display: none;

  @media (min-width: ${breakpoints.small}) {
    display: flex;
  }
`;

const NavbarItem = styled.li`
  color: white;
  font-weight: ${type.weights.medium};
  margin: 0 1rem;
  white-space: nowrap;

  @media (min-width: 900px) {
    margin: 0 2rem;
  }

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
  width: 100vw;
  z-index: 10;

  @media (min-width: ${breakpoints.small}) {
    display: none;
  }
`;

const SideMenuOverlay = styled.div`
  background-color: black;
  height: 100vh;
  left: 0;
  opacity: ${props => (props.isOpen ? 0.66 : 0)};
  position: absolute;
  transition: opacity 0.4s;
  width: 100vw;
`;

const SideMenuList = styled.ul`
  background-color: #eee;
  display: block;
  height: 100vh;
  max-width: 25rem;
  padding-top: 4rem;
  position: relative;
  transform: ${props => (props.isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-100vw, 0 ,0)')};
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  width: 100%;
`;

const SideMenuItem = styled.li`
  border-bottom: 1px solid #ddd;
  display: block;

  a {
    color: #333;
    display: block;
    padding: 1rem;
    width: 100%;
  }
`;

const SideMenuOpen = styled.a`
  cursor: pointer;
  display: inline-block;
  left: 10px;
  position: absolute;
  top: 20px;
  z-index: 1;

  @media (min-width: ${breakpoints.small}) {
    display: none;
  }

  img {
    height: 3.75rem;
    width: 3.75rem;
  }
`;

const SideMenuClose = styled.a`
  cursor: pointer;
  display: inline-block;
  height: 2.75rem;
  position: absolute;
  right: 12px;
  top: 0;
  width: 2.75rem;

  img {
    height: 3.75rem;
    width: 3.75rem;
  }
`;

const navbarItems = [
  { name: 'About', link: '/about' },
  { name: 'Coworking', link: '/the-pond' },
  { name: 'Deep Learning', link: '/deep-learning' },
  { name: 'Events', link: '/events' },
  { name: 'Workshops', link: '/workshops' },
];

const sidenavItems = [
  { name: 'About', link: '/about' },
  { name: 'Articles', link: '/articles' },
  { name: 'Clients', link: '/clients' },
  { name: 'Contact', link: '#footer' },
  { name: 'Coworking', link: '/the-pond' },
  { name: 'Deep Learning', link: '/deep-learning' },
  { name: 'Events', link: '/events' },
  { name: 'Workshops', link: '/workshops' },
];

const Navbar = ({ styles }: { styles: Object }) => {
  return (
    <NavbarContainer style={styles}>
      {navbarItems.map(item => (
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
      <SideMenuOpen isOpen={isOpen} onClick={onToggle}>
        <img src={staticAssetPath('menu.svg')} alt="Menu" />
      </SideMenuOpen>
      <SideMenuContainer isOpen={isOpen}>
        <SideMenuOverlay isOpen={isOpen} />
        <SideMenuList isOpen={isOpen}>
          <SideMenuClose onClick={onToggle}>
            <img src={staticAssetPath('close.svg')} alt="Close" />
          </SideMenuClose>
          {sidenavItems.map(item => (
            <SideMenuItem key={item.name}>
              <Link to={item.link} onClick={onToggle}>
                {item.name}
              </Link>
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

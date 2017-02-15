// Imports - config
import React from 'react';
import styled from 'styled-components';
import { palette, type } from '../lib/settings';

const Base = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  color: ${props => props.white ? 'white' : 'inherit'};
  margin: 0 2rem;
`;

// Component
const Nav = (
  {
    items,
    style,
    white,
  },
) => {
  return (
    <Base style={style}>
      {items.map(item => {
        return (
          <NavItem key={item} white={white}>
            {item}
          </NavItem>
        );
      })}
    </Base>
  );
};

Nav.propTypes = {};

export default Nav;

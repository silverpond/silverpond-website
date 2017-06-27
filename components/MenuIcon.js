// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  display: block;

  ${props => (props.active ? activeStyles : '')}
`;

const Rect = styled.rect.attrs({
  x: 0,
  width: 36,
  height: 3,
  stroke: 'none',
  fill: '#ffffff',
})`
  transform-origin: center;
  transition: all .2s ease;
`;

const activeStyles = `
  rect:nth-of-type(1) {
    transform: translateY(10px) rotate(45deg);
  }

  rect:nth-of-type(2) {
    opacity: 0;
  }

  rect:nth-of-type(3) {
    transform: translateY(-10px) rotate(-45deg);
  }
`;

// Component
const MenuIcon = ({ active }) => {
  return (
    <Svg
      width="36px"
      height="28px"
      viewBox="0 -2 36 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      active={active}
    >
      <title>Menu icon</title>
      <Rect y={0} />
      <Rect y={10} />
      <Rect y={20} />
    </Svg>
  );
};

export default MenuIcon;

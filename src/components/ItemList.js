// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  & + & {
    margin-top: 5rem;
  }
`;

// Component
const ItemList = (
  {
    children,
  }: {
    children?: React.Element<any>,
  },
) => {
  return (
    <div>
      {React.Children.map(children, child => {
        return (
          <Item>
            {child}
          </Item>
        );
      })}
    </div>
  );
};

export default ItemList;

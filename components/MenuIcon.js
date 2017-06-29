// @flow
// Imports - config
import React from 'react';

// Component
const MenuIcon = (props: Object) => {
  return (
    <svg
      fill="inherit"
      width="24"
      height="20"
      viewBox="0 0 17 14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>
        Menu icon
      </title>
      <path
        d="M0 10h17V8H0v2zm0 4h17v-2H0v2zm0-8h17V4H0v2zm0-6v2h17V0H0z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default MenuIcon;

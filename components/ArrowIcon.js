// @flow
// Imports - config
import React from 'react';

// Component
const ArrowIcon = (props: Object) => {
  return (
    <svg
      fill="inherit"
      height={12}
      shapeRendering="crispEdges"
      viewBox="0 0 42 8"
      width={64}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>
        Arrow icon
      </title>
      <path d="M42 4l-4-4v3H.605v2H38v3z" fillRule="evenodd" />
    </svg>
  );
};

export default ArrowIcon;

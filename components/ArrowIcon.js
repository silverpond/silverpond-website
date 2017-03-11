// Imports - config
import React from 'react';
import { palette } from '../lib/settings';

// Component
const ArrowIcon = (
  {
    fill = palette.slate.base,
    ...props
  }: {
    fill: string,
  },
) => {
  return (
    <svg
      width={64}
      height={12}
      viewBox="0 0 42 8"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      shapeRendering="crispEdges"
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

// @flow
import { palette } from '../lib/settings';

export const linkUnderline = `
  position: relative;
  z-index: 0;

  &:after {
    backgroundColor: ${palette.blue.lightest};
    bottom: 3px;
    content: "";
    display: block;
    height: 4px;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
  }
`;

export const textBlock = `
  h1,
  h2 {
    margin-top: 4rem;
  }

  h3,
  h4 {
    margin-top: 2rem;
  }

  img {
    margin: 1.5rem 0;
    max-width: 100%;
  }

  a {
    ${linkUnderline}
  }
`;

export const centerContent = `
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const angleClip = `
  clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 125px), calc(100% - 250px) 100%, 0 100%);
`;

export const angledAccent = (backgroundColor: string = 'white') => {
  return `
    position: relative;

    &:before {
      backgroundColor: ${backgroundColor};
      bottom: 100%;
      content: "";
      clipPath: polygon(100% 0, 100% 100%,0 100%);
      display: block;
      height: 125px;
      pointer-events: none;
      position: absolute;
      right: 0;
      width: 250px;
    }
  `;
};

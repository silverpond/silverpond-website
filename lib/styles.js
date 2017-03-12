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

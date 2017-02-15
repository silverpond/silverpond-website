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

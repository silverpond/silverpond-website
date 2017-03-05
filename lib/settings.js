// @flow
import styleInject from 'style-inject';
import toCss from 'to-css';
import typescale from 'typescale';
import { generateShades } from 'palette-generator';
import { kebabCase, forIn, set } from 'lodash';
import { string as toStyle } from 'to-style';

// Converts camel case style object from type object to kebab case for
// conversion to css string
const convertCase = (key: string) => {
  const styles = {};

  forIn(type[key], (v: string, k: string) => {
    styles[kebabCase(k)] = v;
  });

  return styles;
};

// Returns css string of typography styles
export const typeStyles = (key: string) => {
  return toStyle(convertCase(key));
};

// Palette setup
export const palette = {};
palette.blue = generateShades(207, '95%', '37%', '13%');
palette.blue.lightest = 'hsl(207, 95%, 85%)';
palette.slate = generateShades(207, '16%', '22%', '20%');
palette.red = generateShades(4, '86%', '61%', '25%');
palette.grey = {
  lighter: 'hsl(225, 22%, 96%)',
  light: 'hsl(210, 22%, 91%)',
  base: 'hsl(217, 4%, 62%)',
  darker: 'hsl(228, 12%, 16%)',
};

// Typography setup
export const type = typescale({
  headingFontFamily: 'Heebo',
  headingFontWeight: 500,
  bodyFontFamily: 'Heebo',
  scale: 1.2,
});

type.small.fontSize = '14px';

set(type, ['weights', 'normal'], 400);
set(type, ['weights', 'medium'], 500);
set(type, ['weights', 'bold'], 700);

const css = {
  '*': {
    'box-sizing': 'border-box',
  },

  html: {
    color: palette.grey.darker,
    '-webkit-font-smoothing': 'antialiased',
  },

  a: {
    color: 'currentColor',
    'text-decoration': 'none',
  },

  ul: {
    'list-style': 'none',
    margin: 0,
    padding: 0,
  },
};

set(css, 'html', Object.assign(css.html, convertCase('html')));
set(css, 'body', convertCase('p'));
set(css, 'h1', convertCase('h1'));
set(css, 'h2', convertCase('h2'));
set(css, 'h3', convertCase('h3'));
set(css, 'h4', convertCase('h4'));
set(css, 'h5', convertCase('h5'));

styleInject(toCss(css));

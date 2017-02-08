import styleInject from 'style-inject'
import toCss from 'to-css'
import { kebabCase, forIn } from 'lodash'
import typescale from 'typescale'
import { generateShades } from 'palette-generator'

// Palette setup
export const palette = {}
palette.blue = generateShades(207, '95%', '37%', '13%')
palette.slate = generateShades(207, '16%', '22%', '20%')
palette.red = generateShades(4, '86%', '61%', '15%')
palette.grey = {
  light: 'hsl(210, 22%, 91%)',
  base: 'hsl(217, 4%, 62%)',
  darker: 'hsl(228, 12%, 16%)',
}

// Typography setup
export const type = typescale({
  headingFontFamily: 'Heebo',
  headingFontWeight: 500,
  bodyFontFamily: 'Heebo',
})

type.small.fontSize = '14px'

const css = {
  '*': {
    'box-sizing': 'border-box',
  },

  html: {
    color: palette.grey.darker,
  },

  a: {
    color: 'currentColor',
    'text-decoration': 'none',
  },

  p: {},
}

forIn(type.html, (value, key) => {
  css.html[kebabCase(key)] = value
})

forIn(type.p, (value, key) => {
  css.p[kebabCase(key)] = value
})

styleInject(toCss(css))

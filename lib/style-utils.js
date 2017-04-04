import { css } from 'styled-components';

export const media = {
  extrasmall: (...args) => css`
    @media (max-width:768px) {
      ${ css(...args) }
    }`,

  small: (...args) => css`
    @media (min-width:768px) and (max-width:992px) {
      ${ css(...args) }
    }`,

  medium: (...args) => css`
    @media (min-width:992px) and (max-width:1200px) {
      ${ css(...args) }
    }`,

  large: (...args) => css`
    @media (min-width:12000px)) {
      ${ css(...args) }
    }`,

}

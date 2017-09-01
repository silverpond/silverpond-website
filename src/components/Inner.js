// @flow

import styled from 'styled-components';

import { breakpoints } from 'lib/settings';

const Inner = styled.div`
  margin: 0 auto;
  max-width: ${props => breakpoints[props.size || 'large']};
`;

export default Inner;

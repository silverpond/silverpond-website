// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

import { styles } from 'components/Button';

// Styled components
const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  ${() => styles({ color: 'grey' })}
`;

// Component
const FileInput = ({ onChange }) => {
  return (
    <Label>
      Choose file
      <Input type="file" onChange={onChange} />
    </Label>
  );
};

export default FileInput;

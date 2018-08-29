import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../providers/styles';

const Input = styled.input`
  padding: 0.5rem 1rem;
  margin: 1rem;
  font-size: 1rem;
  color: ${colors.primary};
  background: ${colors.gray};
  border: none;
  border-radius: 5rem;
  ${props => props.fluid && css`
    width: calc(100% - 4rem);
  `}
`;

const TextInput = props => (
  <Input {...props} />
);

export default TextInput;

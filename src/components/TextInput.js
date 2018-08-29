import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../providers/styles';

const Input = styled.input`
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 0rem 1rem;
  font-size: 1rem;
  color: ${colors.primary};
  background: ${colors.gray};
  border: none;
  border-radius: 5rem;
  ${props => props.fluid && css`
    width: calc(100% - 5rem);
  `}
  ${props => props.hasRightIcon && css`
    padding: 0.5rem 2rem 0.5rem 1rem;
  `}
`;

const TextInput = props => (
  <Input {...props} />
);

export default TextInput;

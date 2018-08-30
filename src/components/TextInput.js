import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../providers/styles';

/**
 * Input <input> tag
 */
const Input = styled.input`
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 0rem 1rem;
  font-size: 1rem;
  color: ${colors.primary};
  background: ${colors.gray};
  border: none;
  border-radius: 5rem;
  /**
   * Take up whole parent width if "fluid" prop is defined
   */
  ${props => props.fluid && css`
    width: calc(100% - 5rem);
  `}
  /**
   * Create right padding to fit icon if "hasRight" prop is defined
   */
  ${props => props.hasRightIcon && css`
    padding: 0.5rem 2rem 0.5rem 1rem;
  `}
`;

/**
 * TextInput UI Component
 */
const TextInput = props => (
  <Input {...props} />
);

export default TextInput;

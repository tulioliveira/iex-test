import React from 'react';
import styled from 'styled-components';
import { colors } from '../providers/styles';

const H1 = styled.h1`
  display: ${props => (props.inline ? 'inline' : 'block')};
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${colors.primary}
`;

const Title = props => (
  <H1 {...props} />
);

export default Title;

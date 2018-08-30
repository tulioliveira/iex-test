import styled from 'styled-components';
import { colors } from '../providers/styles';

/**
 * Tag UI Component
 */
const Tag = styled.span`
  display: inline-block;
  background-color: ${colors.secondary};
  color: ${colors.white};
  padding: 0.2rem 0.5rem;
  margin: 0.5rem 0.1rem;
  border-radius: 0.5rem;
  font-size: 0.5rem;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
`;

export default Tag;

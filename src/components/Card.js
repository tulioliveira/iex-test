import styled from 'styled-components';
import { colors } from '../providers/styles';

/**
 * Card UI Component
 */
const Card = styled.div`
  margin: 0.5rem 0rem;
  padding: 1rem;
  border-radius: 0.2rem;
  font-size: 1.2rem;
  font-weight: bold;
  /**
   * Change background-color if "error" prop is defined
   */
  background-color: ${props => (props.error ? colors.red : colors.gray)};
  /**
   * Change color if "error" prop is defined
   */
  color: ${props => (props.error ? colors.white : colors.secondary)};
`;

export default Card;

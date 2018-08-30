import styled from 'styled-components';
import { colors } from '../providers/styles';

const Card = styled.div`
  margin: 0.5rem 0rem;
  padding: 1rem;
  border-radius: 0.2rem;
  background-color: ${props => (props.error ? colors.red : colors.gray)};
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => (props.error ? colors.white : colors.secondary)};
`;

export default Card;

import styled from 'styled-components';
import { colors } from '../providers/styles';

const Title = styled.span`
  display: ${props => (props.inline ? 'inline' : 'block')};
  font-size: ${props => (props.size ? props.size : '2rem')};
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${colors.primary}
`;

export default Title;

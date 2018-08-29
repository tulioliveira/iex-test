import styled from 'styled-components';
import { isTextAlignProperty } from '../providers/styles';

const Text = styled.span`
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : 0)};
  font-size: ${props => (props.size ? props.size : '1rem')};
  font-weight: ${props => (props.bold ? 'bold' : 'regular')};
  text-align: ${props => (isTextAlignProperty(props.textAlign) ? props.textAlign : 'left')};
  margin: ${props => (props.margin ? props.margin : 0)};
`;

export default Text;

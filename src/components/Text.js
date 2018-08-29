import styled from 'styled-components';
import { isTextAlignProperty } from '../providers/styles';

const Text = styled.span`
  font-size: ${props => (props.size ? props.size : '1rem')};
  font-weight: ${props => (props.primary ? 'white' : 'palevioletred')};
  text-align: ${props => (isTextAlignProperty(props.textAlign) ? props.textAlign : 'left')};
`;

export default Text;

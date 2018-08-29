import styled from 'styled-components';
import { isTextAlignProperty } from '../providers/styles';

const Paragraph = styled.p`
  font-size: ${props => (props.size ? props.size : '1rem')};
  text-align: ${props => (isTextAlignProperty(props.textAlign) ? props.textAlign : 'left')};
  margin: 0.5rem 0rem;
`;

export default Paragraph;

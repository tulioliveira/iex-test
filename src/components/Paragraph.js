import styled from 'styled-components';
import { isTextAlignProperty } from '../providers/styles';

/**
 * Paragraph UI Component
 */
const Paragraph = styled.p`
  /**
   * "size" prop mapped to font-size property
   */
  font-size: ${props => (props.size ? props.size : '1rem')};
  /**
   * "textAlign" prop mapped to text-align property
   */
  text-align: ${props => (isTextAlignProperty(props.textAlign) ? props.textAlign : 'left')};
  margin: 0.5rem 0rem;
`;

export default Paragraph;

import styled from 'styled-components';
import { isAlignProperty, isJustifyProperty } from '../providers/styles';

/**
 *  Row UI component, used for flexbox row structure
 */
const Row = styled.div`
  display: flex;
  /**
   * "flex" prop mapped to flex property
   */
  flex: ${props => (props.flex ? props.flex : 1)};
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0.5rem 0rem;
  /**
   * "alignItems" prop mapped to align-items property
   */
  align-items: ${props => (isAlignProperty(props.alignItems) ? props.alignItems : 'flex-start')};
  /**
   * "justifyContent" prop mapped to justify-content property
   */
  justify-content: ${props => (isJustifyProperty(props.justifyContent) ? props.justifyContent : 'flex-start')}
`;

export default Row;

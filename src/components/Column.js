import styled from 'styled-components';
import { isAlignProperty, isJustifyProperty } from '../providers/styles';

/**
 * Column UI component, used for flexbox column structure
 */
const Column = styled.div`
  display: flex;
  /**
   * "flex" prop mapped to flex property
   */
  flex: ${props => (props.flex ? props.flex : 1)};
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0rem 0.5rem;
  /**
   * "minWidth" prop mapped to min-width property
   */
  min-width: ${props => (props.minWidth ? props.minWidth : 0)};
  /**
   * "alignItems" prop mapped to align-items property
   */
  align-items: ${props => (isAlignProperty(props.alignItems) ? props.alignItems : 'flex-start')};
  /**
   * "justifyContent" prop mapped to justify-content property
   */
  justify-content: ${props => (isJustifyProperty(props.justifyContent) ? props.justifyContent : 'flex-start')}
`;

export default Column;

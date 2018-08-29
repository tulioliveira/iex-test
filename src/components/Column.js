import styled from 'styled-components';
import { isAlignProperty, isJustifyProperty } from '../providers/styles';

const Column = styled.div`
  display: flex;
  flex: ${props => (props.flex ? props.flex : 1)};
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0rem 0.5rem;
  min-width: ${props => (props.minWidth ? props.minWidth : 0)};
  align-items: ${props => (isAlignProperty(props.alignItems) ? props.alignItems : 'flex-start')};
  justify-content: ${props => (isJustifyProperty(props.justifyContent) ? props.justifyContent : 'flex-start')}
`;

export default Column;

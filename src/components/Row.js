import styled from 'styled-components';
import { isAlignProperty, isJustifyProperty } from '../providers/styles';

const Row = styled.div`
  display: flex;
  flex: ${props => (props.flex ? props.flex : 1)};
  flex-direction: row;
  align-items: ${props => (isAlignProperty(props.alignItems) ? props.alignItems : 'flex-start')};
  justify-content: ${props => (isJustifyProperty(props.justifyContent) ? props.justifyContent : 'flex-start')}
`;

export default Row;

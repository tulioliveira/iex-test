import styled from 'styled-components';
import { isAlignProperty, isJustifyProperty } from '../providers/styles';

const Row = styled.div`
  display: flex;
  flex: ${props => (props.flex ? props.flex : 1)};
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0.5rem 0rem;
  align-items: ${props => (isAlignProperty(props.alignItems) ? props.alignItems : 'flex-start')};
  justify-content: ${props => (isJustifyProperty(props.justifyContent) ? props.justifyContent : 'flex-start')}
`;

export default Row;

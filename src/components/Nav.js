import styled, { css } from 'styled-components';
import { colors } from '../providers/styles';

const Nav = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 0.5rem 1rem;
  font-size: 1rem;
  color: ${colors.primary};
  background: ${colors.gray};
  border: none;
  border-radius: 5rem;
  ${props => props.fluid && css`
    width: calc(100% - 5rem);
  `}
  ${props => props.isActive && css`
    color: ${colors.white};
    background: ${colors.secondary};
  `}
  &:hover {
    background-color: ${colors.darkGray};
    ${props => props.isActive && css`
      background: ${colors.secondary};
    `}
  }
  &:active {
    opacity: 0.6;
  }
`;

export default Nav;

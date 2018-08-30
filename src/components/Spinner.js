import styled, { keyframes } from 'styled-components';
import { FiLoader } from 'react-icons/fi';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(FiLoader)`
  display: inline-block;
  animation: ${rotate360} 2.5s linear infinite;
  padding: 2rem 1rem;
  font-size: 5rem;
`;

export default Spinner;

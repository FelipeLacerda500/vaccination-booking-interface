import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px;
  border: 0;
  background: ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme['white']};
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme['blue-700']};
    transition: background-color 0.2s;
  }
  &:disabled {
    background: ${(props) => props.theme['gray-400']};
    cursor: not-allowed;
  }
`;

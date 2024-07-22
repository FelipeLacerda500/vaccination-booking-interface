import styled from 'styled-components';

export const CustomDatePickerContainer = styled.input`
  flex: 1;
  position: relative;
  border-radius: 6px;
  border: 0;
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-300']};
  padding: 1rem;

  &::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }
`;

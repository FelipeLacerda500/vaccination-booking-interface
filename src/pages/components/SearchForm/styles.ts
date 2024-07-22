import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  CustomDatePicker {
    flex: 1;
  }
  input {
    position: relative;
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;
    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  input[type='date']::-webkit-calendar-picker-indicator {
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
  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['blue-300']};
    color: ${(props) => props.theme['blue-300']};
    font-weight: bold;
    border-radius: 6px;
    &:hover {
      background: ${(props) => props.theme['blue-500']};
      border-color: ${(props) => props.theme['blue-500']};
      color: ${(props) => props.theme['white']};
      transition:
        background-color 0.2s,
        color 0.2s,
        border-color 0.2s;
    }
  }
`;

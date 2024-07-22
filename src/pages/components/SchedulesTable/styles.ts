import styled from 'styled-components';

export const SchedulesTableContainer = styled.table`
  width: 100%;
  overflow-y: auto;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  thead {
    font-size: 1.1rem;
    font-weight: 900;
  }
  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const ConfirmSheduleButton = styled.button`
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
  }
`;

export const PaginationButtonsContainer = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const LogoContainer = styled.div`
  color: ${(props) => props.theme['white']};
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

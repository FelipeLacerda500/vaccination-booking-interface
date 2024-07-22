import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 1.75rem 0;
  background-color: ${(props) => props.theme['gray-900']};
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 4.25rem;
`;

export const LogoContainer = styled.div`
  color: ${(props) => props.theme['white']};
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const NewScheduleButton = styled.button`
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
`;

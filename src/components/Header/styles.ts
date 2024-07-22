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

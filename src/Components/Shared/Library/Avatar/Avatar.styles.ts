import styled from "styled-components";

export const AvatarWrapper = styled.div<{ color?: string }>`
  display: flex;
  width: 1.375rem;
  height: 1.375rem;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.white};
  background-color: #bd009d;
  padding: 0.125rem 0.5rem;
  border-radius: 50%;
  font-size: 0.75rem;
`;

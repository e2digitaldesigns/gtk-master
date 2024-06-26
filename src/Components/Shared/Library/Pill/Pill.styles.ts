import styled from "styled-components";

export const Pill = styled.div<{ color?: string }>`
  display: flex;
  min-width: 4rem;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.white};
  background-color: #4aa467;
  padding: 0.125rem 0.5rem;
  border-radius: 0.75rem;
  font-size: 0.75rem;
`;

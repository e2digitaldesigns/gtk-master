import styled from "styled-components";

export const WellWrapper = styled.div`
  background-color: ${props => props.theme.colors.background1};
  border: 0.0625rem solid ${props => props.theme.colors.border1};
  border-radius: ${props => props.theme.borderRadius};
  padding: 0.5rem 0.75rem;
`;

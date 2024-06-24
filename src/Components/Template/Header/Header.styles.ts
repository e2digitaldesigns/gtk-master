import styled from "styled-components";

export const Header = styled.div`
  height: ${props => props.theme.templateSizes.headerHeight};
  width: 100vw;
  background-color: ${props => props.theme.colors.white};
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  position: fixed;
`;

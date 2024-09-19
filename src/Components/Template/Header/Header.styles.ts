import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: ${props => props.theme.templateSizes.headerHeight};
  width: 100vw;
  background-color: ${props => props.theme.colors.white};
  color: black;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid ${props => props.theme.colors.border1};
  position: fixed;
`;

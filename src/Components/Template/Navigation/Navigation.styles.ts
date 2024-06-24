import styled from "styled-components";

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.gray2};
  height: ${props => `calc(100vh - ${props.theme.templateSizes.headerHeight})`};
  width: ${props => props.theme.templateSizes.navigationWidth};
  border-right: 1px solid ${props => props.theme.colors.border};
  position: fixed;
  top: 70px;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 20px;
  cursor: pointer;
  border-left: 4px solid transparent;
  &:hover {
    background-color: ${props => props.theme.colors.gray1};
    border-left-color: ${props => props.theme.colors.accent};
  }
`;

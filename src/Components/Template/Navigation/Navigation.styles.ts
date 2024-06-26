import styled from "styled-components";

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background2};
  height: ${props => `calc(100vh - ${props.theme.templateSizes.headerHeight})`};
  width: ${props => props.theme.templateSizes.navigationWidth};
  border-right: 0.0625rem solid ${props => props.theme.colors.border2};
  position: fixed;
  top: ${props => props.theme.templateSizes.headerHeight};
`;

export const NavItem = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 0 1.25rem;
  cursor: pointer;
  border-left: 0.25rem solid
    ${props => (props.isActive ? props.theme.colors.primary : "transparent")};
  color: ${props => props.theme.colors.font};
  font-size: 0.875rem;
  font-weight: ${props => (props.isActive ? 500 : 400)};
  background-color: ${props =>
    props.isActive ? props.theme.colors.gray1 : "transparent"};
  &:hover {
    background-color: ${props => props.theme.colors.gray1};
    border-left-color: ${props => props.theme.colors.primary};
  }
  transition: background-color 0.75s, border-left-color 0.75s;
`;

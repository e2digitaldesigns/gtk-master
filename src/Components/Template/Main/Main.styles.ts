import styled from "styled-components";

export const MainWrapper = styled.div`
  padding: ${props => props.theme.templateSizes.headerHeight} 0 0
    ${props => props.theme.templateSizes.navigationWidth};
`;

export const PageHeader = styled.div`
  height: ${props => props.theme.templateSizes.pageHeaderHeight};
  width: 100%;
  padding: 0.625rem 1.25rem;
  border-bottom: 0.0625rem solid ${props => props.theme.colors.border1};
  background-color: ${props => props.theme.colors.background1};
  position: fixed;
  z-index: 100;
`;

export const Header = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const HeaderInfo = styled.div`
  display: flex;
  font-size: 0.875rem;
  align-items: center;
  gap: 0.625rem;
  color: #8a8a8a;
`;

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

export const Avatar = styled.div<{ color?: string }>`
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

export const HeaderMenu = styled.div`
  display: flex;
  padding: 0.625rem 0;
  gap: 1.25rem;
`;

export const HeaderMenuItem = styled.div<{ isActive?: boolean }>`
  display: flex;
  padding: 0.625rem 0;
  font-size: 0.875rem;
  font-weight: ${props => (props.isActive ? 600 : 500)};
  border-bottom: 0.125rem solid
    ${props => (props.isActive ? props.theme.colors.primary : "transparent")};
`;

export const PageContent = styled.div`
  padding: 1.25rem;
  padding-top: calc(
    ${props => props.theme.templateSizes.pageHeaderHeight} + 10px
  );
  min-height: ${props =>
    `calc(100vh - ${props.theme.templateSizes.headerHeight})`};
`;

import styled from "styled-components";

export const MainWrapper = styled.div`
  padding: 70px 0 0 280px;
  /* height: 200vh; */
`;

export const PageHeader = styled.div`
  height: ${props => props.theme.templateSizes.pageHeaderHeight};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  position: fixed;
  z-index: 100;
`;

export const PageContent = styled.div`
  padding: 100px 40px 20px 40px;
  min-height: ${props =>
    `calc(100vh - ${props.theme.templateSizes.headerHeight})`};
`;

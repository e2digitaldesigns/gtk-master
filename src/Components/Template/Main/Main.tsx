import React from "react";
import * as Styled from "./Main.styles";
import { Outlet } from "react-router-dom";

export const Main: React.FC = () => {
  return (
    <Styled.MainWrapper>
      <Styled.PageHeader>
        <Outlet />
      </Styled.PageHeader>
      <Styled.PageContent>page content</Styled.PageContent>
    </Styled.MainWrapper>
  );
};

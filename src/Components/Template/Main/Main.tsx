import React from "react";
import * as Styled from "./Main.styles";

export const Main: React.FC = () => {
  return (
    <Styled.MainWrapper>
      <Styled.PageHeader>page header</Styled.PageHeader>
      <Styled.PageContent>page content</Styled.PageContent>
    </Styled.MainWrapper>
  );
};

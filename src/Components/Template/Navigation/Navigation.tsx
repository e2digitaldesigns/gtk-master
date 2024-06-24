import React from "react";

import * as Styled from "./Navigation.styles";

export const Navigation: React.FC = () => {
  return (
    <Styled.Navigation>
      <Styled.NavItem>Overview</Styled.NavItem>
      <Styled.NavItem>Boards</Styled.NavItem>
      <Styled.NavItem>Repos</Styled.NavItem>
    </Styled.Navigation>
  );
};

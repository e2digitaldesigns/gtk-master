import React from "react";
import { Link } from "react-router-dom";

import * as Styled from "./Navigation.styles";
import { Routes } from "../../../Types";

export const Navigation: React.FC = () => {
  return (
    <Styled.Navigation>
      <Link to={Routes.PodcastTemplates}>
        <Styled.NavItem>Podcast Templates</Styled.NavItem>
      </Link>

      <Link to="/boards">
        <Styled.NavItem>Boards</Styled.NavItem>
      </Link>

      <Link to="/repos">
        <Styled.NavItem>Repos</Styled.NavItem>
      </Link>
    </Styled.Navigation>
  );
};

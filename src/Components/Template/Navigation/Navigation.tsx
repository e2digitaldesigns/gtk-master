import React from "react";
import { Link } from "react-router-dom";

import * as Styled from "./Navigation.styles";
import { Routes } from "../../../Types";

export const Navigation: React.FC = () => {
  return (
    <Styled.NavigationWrapper>
      <Link to={Routes.PodcastTemplates}>
        <Styled.NavItem>Podcast Templates</Styled.NavItem>
      </Link>

      <Link to={Routes.PodcastCommands}>
        <Styled.NavItem>Podcast Commands</Styled.NavItem>
      </Link>
    </Styled.NavigationWrapper>
  );
};

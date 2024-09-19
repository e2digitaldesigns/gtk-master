import React from "react";
import * as Styled from "./Main.styles";
import { Outlet } from "react-router-dom";
import { Avatar, Card, Pill, Well } from "../../Shared";

export const Main: React.FC = () => {
  return (
    <Styled.MainWrapper>
      <Styled.PageHeader>
        <Styled.Header>339143 - release 3.6.3</Styled.Header>
        <Styled.HeaderInfo>
          <Pill>Completed </Pill>!40533
          <Avatar>CB</Avatar>
          Eugene Bey proposes to merge story/339143 into master
        </Styled.HeaderInfo>
        <Styled.HeaderMenu>
          <Styled.HeaderMenuItem>Overview</Styled.HeaderMenuItem>
          <Styled.HeaderMenuItem>Files</Styled.HeaderMenuItem>
          <Styled.HeaderMenuItem>Updates</Styled.HeaderMenuItem>
          <Styled.HeaderMenuItem>Commits</Styled.HeaderMenuItem>
          <Styled.HeaderMenuItem>Conflicts</Styled.HeaderMenuItem>
        </Styled.HeaderMenu>
      </Styled.PageHeader>
      <Styled.PageContent>
        <Card>
          <Card.Body>
            <Well>yessir</Well>
          </Card.Body>
          <Card.Separator />
          <Card.Body>
            <Outlet />
          </Card.Body>
        </Card>
      </Styled.PageContent>
    </Styled.MainWrapper>
  );
};

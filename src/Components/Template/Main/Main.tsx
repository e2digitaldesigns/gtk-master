import React from "react";
import * as Styled from "./Main.styles";
import { Outlet } from "react-router-dom";
import { Card, CardBody, CardSeparator } from "../../Shared/Library/Card/Card";
import { Avatar, Pill, Well } from "../../Shared";

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
        {/* <Outlet /> */}
      </Styled.PageHeader>
      <Styled.PageContent>
        <Card>
          <CardBody>
            <Well>yessir</Well>
          </CardBody>
          <CardSeparator />
          <CardBody>
            <Outlet />
          </CardBody>
        </Card>
      </Styled.PageContent>
    </Styled.MainWrapper>
  );
};

import React from "react";

import * as Styled from "./Card.styles";

interface CardProps {
  children: React.ReactNode;
}

interface CardComponent extends React.FC<CardProps> {
  Body: React.FC<CardProps>;
  Separator: React.FC;
}

export const Card: CardComponent = ({ children }) => {
  return <Styled.CardWrapper>{children}</Styled.CardWrapper>;
};

const CardBody: React.FC<CardProps> = ({ children }) => {
  return <Styled.CardBody>{children}</Styled.CardBody>;
};

const CardSeparator: React.FC = () => {
  return <Styled.CardSeparator />;
};

Card.Body = CardBody;
Card.Separator = CardSeparator;

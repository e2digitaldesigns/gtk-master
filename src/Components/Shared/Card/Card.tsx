import React from "react";

import * as Styled from "./Card.styles";

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <Styled.CardWrapper>{children}</Styled.CardWrapper>;
};

export const CardBody: React.FC<CardProps> = ({ children }) => {
  return <Styled.CardBody>{children}</Styled.CardBody>;
};

export const CardSeparator: React.FC = () => {
  return <Styled.CardSeparator />;
};

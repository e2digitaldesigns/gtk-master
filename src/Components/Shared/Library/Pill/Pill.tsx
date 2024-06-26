import React from "react";
import * as Styled from "./Pill.styles";

interface PillProps {
  children: React.ReactNode;
}

export const Pill: React.FC<PillProps> = ({ children }) => {
  return <Styled.Pill>{children}</Styled.Pill>;
};

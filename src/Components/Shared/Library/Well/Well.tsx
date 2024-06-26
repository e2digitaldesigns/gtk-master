import React from "react";
import * as Styled from "./Well.styles";

export interface WellProps {
  children: React.ReactNode;
}

export const Well: React.FC<WellProps> = ({ children }) => {
  return <Styled.WellWrapper>{children}</Styled.WellWrapper>;
};

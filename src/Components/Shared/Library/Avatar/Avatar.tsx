import React from "react";
import * as Styled from "./Avatar.styles";

interface AvatarProps {
  children: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({ children }) => {
  return <Styled.AvatarWrapper>{children}</Styled.AvatarWrapper>;
};

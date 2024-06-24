import React from "react";
import { Template } from "../Template";

export const ApplicationWrapper: React.FC = () => {
  return (
    <>
      <Template.Header />

      <Template.Navigation />

      <Template.Main />
    </>
  );
};

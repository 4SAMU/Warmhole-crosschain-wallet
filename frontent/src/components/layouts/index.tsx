import React from "react";
import { MainWrapper } from "./layout-styles";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default DefaultLayout;

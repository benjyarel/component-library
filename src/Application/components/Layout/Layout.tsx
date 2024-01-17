import type { ReactNode } from "react";

import { Header } from "../Header";
import { Panel } from "../Menu";
import { ContentWrapper } from "./style";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Panel />
        {children}
      </ContentWrapper>
    </>
  );
};

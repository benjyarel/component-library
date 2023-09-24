import type { ReactNode } from "react";

import { Menu } from "../Menu";
import { Header } from "../Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <Menu />
      {children}
    </div>
  );
};

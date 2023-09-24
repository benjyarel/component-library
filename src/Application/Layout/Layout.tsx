import type { ReactNode } from "react";

import { Header } from "../Header";
import { useRecoilValue } from "recoil";
import { isMenuOpen } from "../state";

export const Layout = ({ children }: { children: ReactNode }) => {
  const result = useRecoilValue(isMenuOpen);
  console.log(result);

  return (
    <div>
      <Header />
      <div>TINTIN</div>
      {children}
    </div>
  );
};

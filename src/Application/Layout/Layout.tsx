import type { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "../Header";
import { useRecoilValue } from "recoil";
import { isMenuOpen } from "../state";

export const Layout = ({ children }: { children: ReactNode }) => {
  const isMenuOpenState = useRecoilValue(isMenuOpen);

  return (
    <>
      <Header />
      <StyledLayout>
        {isMenuOpenState && <MenuPanel />}
        {children}
      </StyledLayout>
    </>
  );
};

const MenuPanel = () => {
  return <MenuPanelBox>COUCOU</MenuPanelBox>;
};

const StyledLayout = styled.div`
  display: flex;
  // 100 view height - Header height - bottom border size
  height: calc(100vh - 72px - 6px);
  background: #e8e6e6;
  border-left: solid 6px #000;
  border-bottom: solid 6px #000;
  border-right: solid 6px #000;
`;

const MenuPanelBox = styled.div`
  width: 240px;
  height: 100%;
  background: #fff;

  border-right: solid 6px #000;
`;

import type { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "../Header";
import { useRecoilValue } from "recoil";
import { isMenuOpen } from "../../state";
import { components } from "../../../library";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <StyledLayout>
        <MenuPanel />
        {children}
      </StyledLayout>
    </>
  );
};

const MenuPanel = () => {
  const menuOpen = useRecoilValue(isMenuOpen);

  const createList = () => {
    return components.map(({ id, componentName, category }) => {
      return { id, componentName, category };
    });
  };

  const componentList = createList();

  return (
    <MenuPanelLayout $isVisible={menuOpen}>
      <ul>
        {componentList.map((component) => {
          return <li key={component.id}>{component.componentName}</li>;
        })}
      </ul>
    </MenuPanelLayout>
  );
};

const StyledLayout = styled.div`
  display: flex;
  // 100 view height - (Header height + bottom border size)
  height: calc(100vh - 72px - 6px);
  background: #e8e6e6;
  border-left: solid 6px #000;
  border-bottom: solid 6px #000;
  border-right: solid 6px #000;
`;

const MenuPanelLayout = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  // Header height - bottom border size
  top: 66px;
  width: 240px;
  height: ${({ $isVisible }) => ($isVisible ? "0%" : "calc(100% - 72px)")};

  background: #fff;
  transition: height;
  transition-duration: 450ms;

  overflow: auto;

  border-right: solid 6px #000;
  border-bottom: solid 6px #000;
`;

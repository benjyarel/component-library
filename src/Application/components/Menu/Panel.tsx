import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { isMenuOpen } from "@store";
import { components } from "../../../library";
import { Category } from "./components/Category";
import type { ComponentConfig } from "@shared-types";

export const Panel = () => {
  const menuOpen = useRecoilValue(isMenuOpen);

  const createList = () => {
    return components.reduce(
      (result, { id, componentName, category }) => {
        if (!result[category]) {
          result[category] = [];
        }

        result[category].push({ id, componentName, category });

        return result;
      },
      {} as Record<string, ComponentConfig[]>,
    );
  };

  const componentList = createList();

  return (
    <MenuPanelLayout $isVisible={menuOpen}>
      {Object.entries(componentList).map(([categoryId, categoryComponents]) => (
        <Category
          key={categoryId}
          id={categoryId}
          components={categoryComponents}
        />
      ))}
    </MenuPanelLayout>
  );
};

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

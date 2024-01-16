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
  width: 240px;
  height: 100%;
  position: relative;
  background: #fff;
  border-right: solid 6px #000;
  border-bottom: solid 6px #000;
  overflow: auto;

  margin-left: ${({ $isVisible }) => ($isVisible ? "0" : "-246px")};
  transition: margin-left;
  transition-duration: 450ms;

  font-family: monospace;
  color: #645959;
`;

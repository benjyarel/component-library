import styled from "styled-components";

import { useRecoilValue, useRecoilState } from "recoil";
import { isMenuOpen, selectedComponentId } from "../../state";
import { components } from "../../../library";

// move this type to share folder

interface Component {
  id: string;
  componentName: string;
  category: string;
}

export const Panel = () => {
  const menuOpen = useRecoilValue(isMenuOpen);
  const [_, setComponent] = useRecoilState(selectedComponentId);

  const createList = () => {
    return components.reduce(
      (result, { id, componentName, category }) => {
        if (!result[category]) {
          result[category] = [];
        }

        result[category].push({ id, componentName, category });

        return result;
      },
      {} as Record<string, Component[]>,
    );
  };

  const componentList = createList();
  console.log(componentList);
  return (
    <MenuPanelLayout $isVisible={menuOpen}>
      <ul>
        {componentList.map((component) => {
          return (
            <li onClick={() => setComponent(component.id)} key={component.id}>
              {component.componentName}
            </li>
          );
        })}
      </ul>
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

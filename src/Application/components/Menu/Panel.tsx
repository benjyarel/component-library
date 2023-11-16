import styled from "styled-components";

import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
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

  return (
    <MenuPanelLayout $isVisible={menuOpen}>
      {Object.entries(componentList).map(([categoryId, categoryComponents]) => (
        <div key={categoryId}>
          <Category id={categoryId} components={categoryComponents} />
        </div>
      ))}
    </MenuPanelLayout>
  );
};

const Category = ({
  id,
  components,
}: {
  id: string;
  components: Component[];
}) => {
  return (
    <div>
      <CategoryHeader title={id} />
      <ul>
        {components.map((component) => (
          <CategoryComponent key={component.id} component={component} />
        ))}
      </ul>
    </div>
  );
};
const CategoryHeader = ({ title }: { title: string }) => {
  return (
    <>
      <p>{title}</p>
      <hr />
    </>
  );
};

const CategoryComponent = ({ component }: { component: Component }) => {
  const setComponentIdselected = useSetRecoilState(selectedComponentId);

  const handleOnClick = () => setComponentIdselected(component.id);
  return (
    <li>
      <button onClick={handleOnClick}>{component.componentName}</button>
    </li>
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

import { useSetRecoilState } from "recoil";
import { selectedComponentId } from "../../../../state";
import type { ComponentConfig } from "@shared-types";

interface ComponentLinkProps {
  component: ComponentConfig;
}

export const ComponentLink = ({ component }: ComponentLinkProps) => {
  const setComponentIdselected = useSetRecoilState(selectedComponentId);

  const handleOnClick = () => setComponentIdselected(component.id);

  return (
    <li>
      <button onClick={handleOnClick}>{component.componentName}</button>
    </li>
  );
};

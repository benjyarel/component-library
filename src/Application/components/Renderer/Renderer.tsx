import { useRecoilValue } from "recoil";
import { selectedComponentId, allComponents } from "../../state";
export const Renderer = () => {
  const componentId = useRecoilValue(selectedComponentId);
  console.log(useRecoilValue(allComponents(componentId)));

  return "test";
};

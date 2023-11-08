import { useRecoilValue } from "recoil";
import { componentSelected } from "../../state";

export const Renderer = () => {
  const config = useRecoilValue(componentSelected);
  if (!config) {
    return <p>NO COMPONENT SELECTED</p>;
  }
  const { component } = config;
  return component();
};

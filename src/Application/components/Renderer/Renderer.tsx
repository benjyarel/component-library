import { useRecoilValue } from "recoil";
import { componentConfig } from "../../state";

export const Renderer = () => {
  const config = useRecoilValue(componentConfig);

  if (!config) {
    return <p>NO COMPONENT SELECTED</p>;
  }
  const { component } = config;
  return component();
};

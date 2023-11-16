import { useRecoilValue } from "recoil";
import { componentConfig } from "@store";

export const Renderer = () => {
  const config = useRecoilValue(componentConfig);

  if (!config) {
    return <p>NO COMPONENT SELECTED</p>;
  }
  const { component } = config;
  return component();
};

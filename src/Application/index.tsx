import { useEffect } from "react";
import { Layout } from "./components/Layout";

import { RecoilRoot, useSetRecoilState } from "recoil";
import { components as componentsConfig } from "../library";
import { Renderer } from "./components/Renderer";
import { componentIds } from "@store";
function App() {
  const setComponentIds = useSetRecoilState<string[]>(componentIds);

  useEffect(() => {
    setComponentIds(componentsConfig.map((cc) => cc.id));
  }, []);

  return (
    <Layout>
      <Renderer />
    </Layout>
  );
}

const AppWithProviders = () => {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
};

export default AppWithProviders;

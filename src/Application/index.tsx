import { useEffect } from "react";
import { Layout } from "./components/Layout";

import { RecoilRoot, useSetRecoilState } from "recoil";
import { components as componentsConfig } from "../library";
import { Renderer } from "./components/Renderer";
import { componentIds } from "./state";
function App() {
  const setter = useSetRecoilState(componentIds);
  useEffect(() => {
    const loadComponents = () => {
      const allComponentIds = componentsConfig.map((cc) => {
        return cc.id;
      });

      setter(allComponentIds);
    };

    loadComponents();
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

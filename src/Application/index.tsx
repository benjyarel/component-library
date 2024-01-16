import { useEffect } from "react";
import { Layout } from "./components/Layout";

import { RecoilRoot, useSetRecoilState } from "recoil";
import { components as componentsConfig } from "../library";
import { Renderer } from "./components/Renderer";
import { componentIds } from "@store";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";

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
    <ThemeProvider theme={defaultTheme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default AppWithProviders;

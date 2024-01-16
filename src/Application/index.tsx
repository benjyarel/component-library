import { useEffect } from "react";
import { Layout } from "./components/Layout";

import { RecoilRoot, useSetRecoilState } from "recoil";
import { components as componentsConfig } from "../library";
import { Renderer } from "./components/Renderer";
import { componentIds } from "@store";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    outline: "black",
    text: "black",
    // secondaryText:,
    // background: ,
    activeText: "#172dba",
  },
};

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
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default AppWithProviders;

import { Layout } from "./components/Layout";

import { RecoilRoot, useRecoilState } from "recoil";
import { components } from "../library";
import { Renderer } from "./components/Renderer";
import { componentIds, allComponents } from "./state";

function App() {
  // function initializeState({ set }) {
  //   const allComponentIds = components.map((config) => {
  //     const { atom, ...configurationValues } = config;
  //     // instantiate state for each component in library
  //     set(atom, configurationValues);

  //     return configurationValues.id;
  //   });

  //   set(componentIds, allComponentIds);
  // }

  function initializeState({ set }) {
    set(allComponents, "");
    const allComponentIds = components.map((config) => {
      const { atom, ...configurationValues } = config;
    });

    set(componentIds, allComponentIds);
  }

  return (
    <RecoilRoot initializeState={initializeState}>
      <Layout>
        <Renderer />
      </Layout>
    </RecoilRoot>
  );
}

export default App;

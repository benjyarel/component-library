import { Layout } from "./components/Layout";

import { RecoilRoot, useRecoilValue, atom } from "recoil";
import { selectedComponent } from "./state";
import { components } from "../library";

const titi = atom({ key: "ras", default: "merde" });

function App() {
  function initializeState({ set }) {
    components.forEach((config) => {
      const { atom, ...configurationValues } = config;

      set(atom, configurationValues);
      // needs to insert in an index selector to list all components available
    });
  }

  return (
    <RecoilRoot initializeState={initializeState}>
      <Layout>
        <Renderer />
      </Layout>
    </RecoilRoot>
  );
}

const Renderer = () => {
  const toto = components[0].atom;
  const totoValue = useRecoilValue(toto);

  console.log(totoValue);
  const componentId = useRecoilValue(selectedComponent);
  return <h1>{componentId || "No selected component"}</h1>;
};
export default App;

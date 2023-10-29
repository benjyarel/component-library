import { Layout } from "./components/Layout";

import { RecoilRoot } from "recoil";
import { components } from "../library";
function App() {
  return (
    <RecoilRoot>
      <Layout>Hello WORLD</Layout>
    </RecoilRoot>
  );
}

export default App;

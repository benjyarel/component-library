import { Layout } from "./components/Layout";

import { RecoilRoot } from "recoil";
import { components } from "../library";
function App() {
  console.log(components);

  const createList = () => {
    return components.map(({ id, componentName, category }) => {
      return { id, componentName, category };
    });
    // groupBy categories to do
  };

  console.log("createList", createList());
  return (
    <RecoilRoot>
      <Layout>Hello WORLD</Layout>
    </RecoilRoot>
  );
}

export default App;

import { Layout } from "./components/Layout";

import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Content />
    </RecoilRoot>
  );
}

const Content = () => {
  return <Layout>Hello WORLD</Layout>;
};

export default App;

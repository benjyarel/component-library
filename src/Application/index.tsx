import { Layout } from "./components/Layout";
import { useRecoilValue, useRecoilState } from "recoil";
import { RecoilRoot } from "recoil";
import { selectedComponent } from "./state";
function App() {
  return (
    <RecoilRoot>
      <Layout>
        <Renderer />
      </Layout>
      ;
    </RecoilRoot>
  );
}

const Renderer = () => {
  const componentId = useRecoilValue(selectedComponent);
  return <h1>{componentId || "No selected component"}</h1>;
};
export default App;

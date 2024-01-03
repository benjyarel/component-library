import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { componentConfig } from "@store";

import { EmptyState } from "./EmptyState";

export const Renderer = () => {
  const config = useRecoilValue(componentConfig);

  if (!config) {
    return (
      <Layout>
        <EmptyState />
      </Layout>
    );
  }
  const { component } = config;

  return <Layout>{component()}</Layout>;
};

const Layout = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 8px;
  width: 100%;
  padding: 4px;
  border: solid 6px #000;
`;

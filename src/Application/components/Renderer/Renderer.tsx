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
  background-color: ${({ theme }) => theme.colors.rendererBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 8px;
  padding: 4px;
  border: ${({ theme }) => theme.border};
  flex: 1;
`;

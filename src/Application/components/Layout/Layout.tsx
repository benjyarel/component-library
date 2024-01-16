import type { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "../Header";
import { Panel } from "../Menu";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <StyledLayout>
        <Panel />
        {children}
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.div`
  display: flex;
  // 100 view height - (Header height + bottom border size)
  height: calc(100vh - 72px - 6px);
  background: #e8e6e6;
  border-left: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
  border-right: ${({ theme }) => theme.border};
`;

import { Menu } from "../Menu";
import styled from "styled-components";
export const Header = () => {
  return (
    <HeaderLayout>
      <Menu />
      <h2>Header</h2>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  display: flex;
  background-color: gray;
`;

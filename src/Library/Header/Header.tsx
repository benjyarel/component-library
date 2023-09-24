import { Menu } from "../Menu";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderLayout>
      <Menu />
      <Title>Component Library</Title>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  height: 60px;
  display: flex;
  align-items: center;

  background: #242424;
  color: lightblue;
`;

const Title = styled.div`
  margin: auto;
`;

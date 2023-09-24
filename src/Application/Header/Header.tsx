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

  font-family: monospace;
  color: #000;
  font-size: large;
  font-weight: 900;

  background: #fff;
  border: solid 6px #000;
`;

const Title = styled.div`
  position: absolute;
  left: 50%;
`;

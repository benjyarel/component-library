import { MenuButton } from "../Menu";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderLayout>
      <MenuButton />
      <Title>Component Library</Title>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  height: 60px;
  display: flex;
  align-items: center;

  background: #fff;
  border: ${({ theme }) => theme.border};
`;

const Title = styled.h2`
  position: absolute;
  left: 50%;
  font-family: monospace;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 900;
`;

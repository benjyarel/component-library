import styled from "styled-components";
import { BurgerIcon } from "./BurgerIcon";
import { useSetRecoilState } from "recoil";
import { isMenuOpen } from "@store";

export const MenuButton = () => {
  const setIsMenuOpen = useSetRecoilState(isMenuOpen);

  const handleClick = () => setIsMenuOpen((state) => !state);

  return (
    <Button onClick={handleClick}>
      <BurgerIcon />
    </Button>
  );
};

const Button = styled.button`
  all: unset;

  height: 100%;
  width: 240px;
  border-right: ${({ theme }) => theme.border};
`;

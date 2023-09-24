import { useState } from "react";
import styled from "styled-components";
import { BurgerIcon } from "./BurgerIcon";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => setMenuOpen((prev) => !prev);

  return (
    <Button onClick={handleClick}>
      <BurgerIcon open={menuOpen} />
    </Button>
  );
};

const Button = styled.button`
  all: unset;

  height: 100%;
  width: 240px;
  border-right: solid 6px #000;
`;

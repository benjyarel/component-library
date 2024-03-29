import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isMenuOpen } from "@store";

const VANISH_DELAY = "250ms";

export const BurgerIcon = () => {
  const open = useRecoilValue(isMenuOpen);

  return (
    <BurgerLayout>
      <BarTop $open={open} />
      <BarMiddle $open={open} $order="positiv" />
      <BarMiddle $open={open} $order="negativ" />
      <BarDown $open={open} />
    </BurgerLayout>
  );
};

const BurgerLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExternalBar = styled.div<{ $open: boolean }>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.outline};

  height: 6px;
  width: 60px;
  transition-property: opacity;
  transition-delay: ${({ $open }) => ($open ? 0 : "650ms")};
  transition-duration: ${VANISH_DELAY};
  opacity: ${({ $open }) => ($open ? "0" : "1")};
`;

const BarTop = styled(ExternalBar)`
  top: 17px;
`;

const BarDown = styled(ExternalBar)`
  top: 51px;
`;

const BarMiddle = styled.div<{ $open: boolean; $order: string }>`
  position: absolute;
  top: 34px;
  background-color: ${({ theme }) => theme.colors.outline};
  height: 6px;
  width: 60px;

  transition-property: transform;
  transition-delay: ${VANISH_DELAY};
  transition-duration: 500ms;

  transform: ${({ $order, $open }) =>
    $open
      ? $order === "positiv"
        ? "rotate(45deg)"
        : "rotate(-45deg)"
      : "none"};
`;

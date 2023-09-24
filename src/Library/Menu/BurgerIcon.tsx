import styled from "styled-components";

const VANISH_DELAY = "250ms";

export const BurgerIcon = ({ open }: { open: boolean }) => {
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

const ExternalBar = styled.div`
  position: absolute;
  background-color: black;

  height: 6px;
  width: 60px;
  transition-property: opacity;
  transition-delay: ${(props) => (props.$open ? 0 : "650ms")};
  transition-duration: ${VANISH_DELAY};
  opacity: ${(props) => (props.$open ? "0" : "1")};
`;

const BarTop = styled(ExternalBar)`
  top: 17px;
`;

const BarDown = styled(ExternalBar)`
  top: 51px;
`;

const BarMiddle = styled.div`
  position: absolute;
  top: 34px;
  background-color: black;
  height: 6px;
  width: 60px;

  transition-property: transform;
  transition-delay: ${VANISH_DELAY};
  transition-duration: 500ms;

  transform: ${(props) =>
    props.$open
      ? props.$order === "positiv"
        ? "rotate(45deg)"
        : "rotate(-45deg)"
      : "none"};
`;

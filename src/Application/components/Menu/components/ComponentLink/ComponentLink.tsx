import { useRecoilState } from "recoil";
import styled from "styled-components";
import { selectedComponentId } from "@store";
import type { ComponentConfig } from "@shared-types";

interface ComponentLinkProps {
  component: ComponentConfig;
}

export const ComponentLink = ({ component }: ComponentLinkProps) => {
  const [componentSelectedId, setComponentIdselected] =
    useRecoilState(selectedComponentId);

  const handleOnClick = () => setComponentIdselected(component.id);
  const isActive = componentSelectedId === component.id;

  return (
    <StyledLink $isActive={isActive} onClick={handleOnClick}>
      {component.componentName}
    </StyledLink>
  );
};

type StyledLinkProps = { $isActive: boolean };

const StyledLink = styled.button<StyledLinkProps>`
  all: unset;
  color: ${($isActive) => ($isActive ? "#172dba" : "none")};
  cursor: ${($isActive) => ($isActive ? "default" : "pointer")};
`;

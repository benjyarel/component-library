import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { selectedComponentId } from "@store";
import type { ComponentConfig } from "@shared-types";

interface ComponentLinkProps {
  component: ComponentConfig;
}

export const ComponentLink = ({ component }: ComponentLinkProps) => {
  const setComponentIdselected = useSetRecoilState(selectedComponentId);

  const handleOnClick = () => setComponentIdselected(component.id);

  return (
    <StyledLink onClick={handleOnClick}>{component.componentName}</StyledLink>
  );
};

const StyledLink = styled.button`
  all: unset;
`;

import { CategoryHeader } from "../CategoryHeader";
import styled from "styled-components";
import type { ComponentConfig } from "@shared-types";
import { ComponentLink } from "../ComponentLink";

export const Category = ({
  id,
  components,
}: {
  id: string;
  components: ComponentConfig[];
}) => {
  return (
    <div>
      <CategoryHeader title={id} />
      <ul>
        {components.map((component) => (
          <ListItem>
            <ComponentLink key={component.id} component={component} />
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

const ListItem = styled.li`
  all: unset;
`;

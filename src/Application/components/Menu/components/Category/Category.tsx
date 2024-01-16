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
          <ListItem key={component.id}>
            <ComponentLink component={component} />
          </ListItem>
        ))}
      </ul>
      <Divider />
    </div>
  );
};

const ListItem = styled.li`
  all: unset;
`;

const Divider = styled.hr`
  margin: 0 8px;
`;

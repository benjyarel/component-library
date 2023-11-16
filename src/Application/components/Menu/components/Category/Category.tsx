import { CategoryHeader } from "../CategoryHeader";
import type { ComponentConfig } from "../../../../types";
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
          <ComponentLink key={component.id} component={component} />
        ))}
      </ul>
    </div>
  );
};

import type { PropsWithChildren } from "react";
import { Group } from "react-aria-components";

interface ButtonGroupProps extends PropsWithChildren {
  intent: "page-navigation";
}

const ButtonGroup = ({ children, intent }: ButtonGroupProps) => {
  return (
    <Group
      className="flex gap-2 place-self-end"
      aria-label={intent === "page-navigation" ? "Page navigation buttons" : ""}
    >
      {children}
    </Group>
  );
};

export default ButtonGroup;

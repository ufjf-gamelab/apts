import { cx } from "class-variance-authority";
import type { PropsWithChildren } from "react";
import { Group } from "react-aria-components";

interface ButtonGroupProps extends PropsWithChildren {
  intent: "page-navigation" | "header";
}

const ButtonGroup = ({ children, intent }: ButtonGroupProps) => {
  const ariaLabel = (() => {
    switch (intent) {
      case "header":
        // TODO: Improve this description
        return "Header actions";
      case "page-navigation":
        return "Page navigation";
    }
  })();
  return (
    <Group
      className={cx("flex flex-wrap justify-end gap-2 place-self-end")}
      aria-label={ariaLabel}
    >
      {children}
    </Group>
  );
};

export default ButtonGroup;

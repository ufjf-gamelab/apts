import { cx } from "class-variance-authority";

import type { CurrentColumn } from "../../layouts/Page";
import Button, { type ButtonProps } from "./Button";

interface ColumnNavigatorProps
  extends Pick<ButtonProps, "intent" | "size" | "icon" | "text"> {
  setCurrentColumn: (target: CurrentColumn) => void;
  targetColumn: CurrentColumn;
}

const ColumnNavigator = ({
  setCurrentColumn,
  intent,
  size,
  icon,
  text,
  targetColumn,
}: ColumnNavigatorProps) => (
  <div className={cx("flex-row", "split:hidden")}>
    <Button
      icon={icon}
      size={size}
      intent={intent}
      text={text}
      onPress={() => {
        setCurrentColumn(targetColumn);
      }}
    />
  </div>
);

export default ColumnNavigator;

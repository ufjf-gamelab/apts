import {
  IconFrame,
  IconListSearch,
  IconPencil,
  IconPlus,
} from "@tabler/icons-react";
import { cx } from "class-variance-authority";

export type IconSymbol = "Plus" | "Pencil" | "Frame" | "ListSearch";

interface IconProps {
  symbol: IconSymbol;
  className: string;
}

const Icon = ({ symbol, className }: IconProps) => {
  switch (symbol) {
    case "Plus":
      return (
        <IconPlus
          aria-disabled
          stroke={2}
          className={cx(className, iconStyle, "p-0")}
        />
      );
    case "Pencil":
      return (
        <IconPencil
          aria-disabled
          stroke={2}
          className={cx(className, iconStyle, "pl-[0.1875rem] pr-[0.0625rem]")}
        />
      );
    case "Frame":
      return (
        <IconFrame
          aria-disabled
          stroke={2}
          className={cx(className, iconStyle)}
        />
      );
    default:
      return (
        <IconListSearch
          aria-disabled
          stroke={2}
          className={cx(className, iconStyle)}
        />
      );
  }
};

const iconStyle = cx(
  "bg-secondary-common",
  "stroke-light p-[0.125rem]",
  "size-[1.625rem]",
  "md:size-[1.875rem]",
  "lg:size-[2.375rem]",
);

export default Icon;

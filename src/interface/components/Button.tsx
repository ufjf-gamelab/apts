import {
  IconArrowBackUp,
  IconCircleArrowLeftFilled,
  IconCircleArrowRightFilled,
  IconPencil,
  IconPlus,
} from "@tabler/icons-react";
import { type VariantProps, cva, cx } from "class-variance-authority";
import { type AriaButtonProps } from "react-aria";
import { Button as ReactAriaButton } from "react-aria-components";

import { iconStyle } from "./Icon";

type Icon = "add" | "edit" | "return" | "previous" | "next";

interface ButtonProps
  extends VariantProps<typeof buttonStyle>,
    Pick<AriaButtonProps, "aria-label" | "onPress"> {
  icon?: Icon;
  text?: string;
}

const Button = ({
  intent,
  size,
  icon,
  text,
  "aria-label": ariaLabel,
}: ButtonProps) => {
  const iconColor = (() => {
    switch (intent) {
      case "accent":
      case "warning":
        return "dark";
      default:
        return "light";
    }
  })();

  const iconComponent = (() => {
    switch (icon) {
      case "add":
        return (
          <IconPlus
            stroke={2}
            aria-disabled
            className={iconStyle({ size, color: iconColor, filled: false })}
          />
        );
      case "edit":
        return (
          <IconPencil
            stroke={2}
            aria-disabled
            className={iconStyle({ size, color: iconColor, filled: false })}
          />
        );
      case "return":
        return (
          <IconArrowBackUp
            stroke={2}
            aria-disabled
            className={iconStyle({ size, color: iconColor, filled: false })}
          />
        );
      case "previous":
        return (
          <IconCircleArrowLeftFilled
            stroke={2}
            aria-disabled
            className={iconStyle({ size, color: iconColor, filled: true })}
          />
        );
      case "next":
        return (
          <IconCircleArrowRightFilled
            stroke={2}
            aria-disabled
            className={iconStyle({ size, color: iconColor, filled: true })}
          />
        );
      default:
        return null;
    }
  })();

  return (
    <ReactAriaButton
      aria-label={ariaLabel}
      className={buttonStyle({ intent, size })}
    >
      {iconComponent}
      {text}
    </ReactAriaButton>
  );
};

const buttonStyle = cva(
  cx(
    "flex items-center gap-1 rounded-full border-2 font-semibold",
    "shadow-outer-2 shadow-dark",
    "md:shadow-outer-3 md:shadow-dark",
    "lg:shadow-outer-4 lg:shadow-dark",
    "active:shadow-inner-2 active:shadow-dark",
    "focus-visible:outline",
    "data-[pressed]:shadow-inner-2 data-[pressed]:shadow-dark",
  ),
  {
    variants: {
      intent: {
        primary: cx(
          "bg-primary-common text-light",
          "hover:bg-primary-dark",
          "active:bg-primary-dark",
          "focus-visible:outline-primary-light/50",
          "data-[pressed]:bg-primary-dark",
        ),
        secondary: cx(
          "bg-secondary-common text-light",
          "hover:bg-secondary-dark",
          "active:bg-secondary-dark",
          "focus-visible:outline-secondary-light/50",
          "data-[pressed]:bg-secondary-dark",
        ),
        accent: cx(
          "bg-accent-common text-dark",
          "hover:bg-accent-dark",
          "active:bg-accent-dark",
          "focus-visible:outline-accent-light/50",
          "data-[pressed]:bg-accent-dark",
        ),
        danger: cx(
          "bg-danger-common text-light",
          "hover:bg-danger-dark",
          "active:bg-danger-dark",
          "focus-visible:outline-danger-light/50",
          "data-[pressed]:bg-danger-dark",
        ),
        warning: cx(
          "bg-warning-common text-dark",
          "hover:bg-warning-dark",
          "active:bg-warning-dark",
          "focus-visible:outline-warning-light/50",
          "data-[pressed]:bg-warning-dark",
        ),
        success: cx(
          "bg-success-common text-light",
          "hover:bg-success-dark",
          "active:bg-success-dark",
          "focus-visible:outline-success-light/50",
          "data-[pressed]:bg-success-dark",
        ),
        inactive: cx(
          "bg-inactive-common text-light",
          "hover:bg-inactive-dark",
          "active:bg-inactive-dark",
          "focus-visible:outline-inactive-light/50",
          "data-[pressed]:bg-inactive-dark",
        ),
      },
      size: {
        small: cx("p-2 text-lg", "md:text-xl"),
        large: cx("p-3 text-2xl"),
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "small",
    },
  },
);

export default Button;

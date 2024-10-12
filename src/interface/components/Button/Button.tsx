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
import { iconStyle } from "../Icon";

type Icon = "add" | "edit" | "return" | "previous" | "next";

const buttonStyle = cva(
  cx(
    "flex h-max items-center justify-center gap-1 rounded-full border-2 font-semibold",
    "shadow-outer-2 shadow-dark",
    "md:shadow-outer-3 md:shadow-dark",
    "lg:shadow-outer-4 lg:shadow-dark",
    "active:shadow-inner-2 active:shadow-dark",
    "focus-visible:outline",
    "data-[pressed]:shadow-inner-2 data-[pressed]:shadow-dark",
  ),
  {
    defaultVariants: {
      intent: "primary",
      size: "small",
    },
    variants: {
      intent: {
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
        inactive: cx(
          "bg-inactive-common text-light",
          "hover:bg-inactive-dark",
          "active:bg-inactive-dark",
          "focus-visible:outline-inactive-light/50",
          "data-[pressed]:bg-inactive-dark",
        ),
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
        success: cx(
          "bg-success-common text-light",
          "hover:bg-success-dark",
          "active:bg-success-dark",
          "focus-visible:outline-success-light/50",
          "data-[pressed]:bg-success-dark",
        ),
        warning: cx(
          "bg-warning-common text-dark",
          "hover:bg-warning-dark",
          "active:bg-warning-dark",
          "focus-visible:outline-warning-light/50",
          "data-[pressed]:bg-warning-dark",
        ),
      },
      size: {
        large: cx("px-3 py-2 text-2xl", "md:px-4 md:text-3xl"),
        medium: cx("px-2 py-1 text-xl", "md:px-3 md:text-2xl"),
        small: cx("px-2 py-0 text-lg", "md:px-3 md:text-xl"),
      },
    },
  },
);

interface IconComponentProps {
  icon: Icon;
  size: "large" | "medium" | "small";
  color: "light" | "dark";
}

const IconComponent = ({ icon, size, color }: IconComponentProps) => {
  switch (icon) {
    case "add":
      return (
        <IconPlus
          stroke={2}
          aria-disabled
          className={iconStyle({ color, filled: false, size })}
        />
      );
    case "edit":
      return (
        <IconPencil
          stroke={2}
          aria-disabled
          className={iconStyle({ color, filled: false, size })}
        />
      );
    case "return":
      return (
        <IconArrowBackUp
          stroke={2}
          aria-disabled
          className={iconStyle({ color, filled: false, size })}
        />
      );
    case "previous":
      return (
        <IconCircleArrowLeftFilled
          stroke={2}
          aria-disabled
          className={iconStyle({ color, filled: true, size })}
        />
      );
    case "next":
      return (
        <IconCircleArrowRightFilled
          stroke={2}
          aria-disabled
          className={iconStyle({ color, filled: true, size })}
        />
      );
    default:
      return null;
  }
};

export interface ButtonProps
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
  onPress,
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

  return (
    <ReactAriaButton
      aria-label={ariaLabel}
      className={buttonStyle({ intent, size })}
      onPress={onPress}
    >
      {icon && (
        <IconComponent icon={icon} size={size ?? "small"} color={iconColor} />
      )}
      {text}
    </ReactAriaButton>
  );
};

export default Button;

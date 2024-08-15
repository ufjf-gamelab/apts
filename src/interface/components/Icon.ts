import { cva, cx } from "class-variance-authority";

const iconStyle = cva("", {
  variants: {
    size: {
      small: cx("size-5", "md:size-6"),
      medium: cx("size-7", "md:size-8"),
      large: cx("size-8", "md:size-9"),
    },
    color: {
      light: "",
      dark: "",
    },
    filled: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      color: "dark",
      filled: false,
      className: "fill-none stroke-dark",
    },
    {
      color: "dark",
      filled: true,
      className: "fill-dark stroke-none",
    },
    {
      color: "light",
      filled: false,
      className: "fill-none stroke-light",
    },
    {
      color: "light",
      filled: true,
      className: "fill-light stroke-none",
    },
  ],
  defaultVariants: {
    size: "small",
  },
});

export { iconStyle };

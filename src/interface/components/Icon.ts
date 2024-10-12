import { cva, cx } from "class-variance-authority";

const iconStyle = cva("", {
  compoundVariants: [
    {
      className: "fill-none stroke-dark",
      color: "dark",
      filled: false,
    },
    {
      className: "fill-dark stroke-none",
      color: "dark",
      filled: true,
    },
    {
      className: "fill-none stroke-light",
      color: "light",
      filled: false,
    },
    {
      className: "fill-light stroke-none",
      color: "light",
      filled: true,
    },
  ],
  defaultVariants: {
    size: "small",
  },
  variants: {
    color: {
      dark: "",
      light: "",
    },
    filled: {
      false: "",
      true: "",
    },
    size: {
      large: cx("size-8", "md:size-9"),
      medium: cx("size-7", "md:size-8"),
      small: cx("size-5", "md:size-6"),
    },
  },
});

export { iconStyle };

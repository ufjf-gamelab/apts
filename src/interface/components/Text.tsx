import { type VariantProps, cva, cx } from "class-variance-authority";
import { Text as AriaText } from "react-aria-components";

type Element = "h1" | "h2" | "p" | "text";

interface TextProps extends VariantProps<typeof textStyle> {
  element?: Element;
  content: string;
}

const Text = ({ align, fontFamily, size, element, content }: TextProps) => {
  switch (element) {
    case "h1":
      return (
        <h1
          className={textStyle({
            align,
            fontFamily,
            size,
          })}
        >
          {content}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={textStyle({
            align,
            fontFamily,
            size,
          })}
        >
          {content}
        </h2>
      );
    case "p":
      return (
        <p
          className={textStyle({
            align,
            fontFamily,
            size,
          })}
        >
          {content}
        </p>
      );
    default:
      return (
        <AriaText
          className={textStyle({
            align,
            fontFamily,
            size,
          })}
        >
          {content}
        </AriaText>
      );
  }
};

const textStyle = cva("text-center font-semibold text-inherit", {
  variants: {
    align: {
      start: "text-start",
      center: "text-center",
      end: "text-end",
    },
    fontFamily: {
      common: "font-common",
      heading: "font-heading",
    },
    size: {
      small: cx("text-lg", "md:text-xl", "lg:text-xl"),
      medium: cx("text-xl", "md:text-2xl", "lg:text-2xl"),
      large: cx("text-2xl", "md:text-3xl", "lg:text-3xl"),
    },
  },
  defaultVariants: {
    align: "start",
    fontFamily: "common",
    size: "small",
  },
});

export default Text;

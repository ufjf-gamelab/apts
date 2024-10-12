import { type VariantProps, cva, cx } from "class-variance-authority";
import { Text as AriaText } from "react-aria-components";

type Element = "h1" | "h2" | "text";

const textStyle = cva("text-center font-semibold text-inherit", {
  defaultVariants: {
    align: "start",
    fontFamily: "common",
    size: "small",
  },
  variants: {
    align: {
      center: "text-center",
      end: "text-end",
      start: "text-start",
    },
    fontFamily: {
      common: "font-common",
      heading: "font-heading",
    },
    size: {
      large: cx("text-2xl", "md:text-3xl", "lg:text-3xl"),
      medium: cx("text-xl", "md:text-2xl", "lg:text-2xl"),
      small: cx("text-lg", "md:text-xl", "lg:text-xl"),
    },
  },
});

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
    default:
      return (
        <AriaText
          className={textStyle({
            align,
            fontFamily,
            size,
          })}
          slot="label"
        >
          {content}
        </AriaText>
      );
  }
};

export default Text;

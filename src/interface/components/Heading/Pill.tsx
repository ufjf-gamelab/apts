import { type VariantProps, cva, cx } from "class-variance-authority";
import type { HTMLAttributes, PropsWithChildren } from "react";

interface PillProps
  extends VariantProps<typeof pillStyle>,
    Pick<HTMLAttributes<HTMLDivElement>, "id" | "aria-label">,
    PropsWithChildren {}

const Pill = ({
  padding,
  id,
  "aria-label": ariaLabel,
  children,
}: PillProps) => {
  return (
    <section id={id} aria-label={ariaLabel} className={pillStyle({ padding })}>
      {children}
    </section>
  );
};

const pillStyle = cva(
  cx(
    "flex items-center overflow-clip rounded-full border-2 bg-light",
    "shadow-outer-2",
    "md:shadow-outer-3",
    "lg:shadow-outer-4",
  ),
  {
    variants: {
      padding: {
        none: "p-0",
        small: cx("*:px-1 *:py-[0.0625rem]", "*:md:px-[0.375rem]", "*:lg:px-2"),
        medium: cx(
          "*:px-2 *:py-[0.125rem]",
          "*:md:px-3 *:md:py-1",
          "*:lg:px-4 *:lg:py-2",
        ),
        large: cx(
          "*:px-2 *:py-[0.125rem]",
          "*:md:px-3 *:md:py-1",
          "*:lg:px-4 *:lg:py-2",
        ),
      },
    },
    defaultVariants: {
      padding: "small",
    },
  },
);

export default Pill;

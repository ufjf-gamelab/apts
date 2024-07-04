import { cx } from "class-variance-authority";
import type { HTMLAttributes, PropsWithChildren } from "react";

interface BoxProps
  extends Pick<HTMLAttributes<HTMLDivElement>, "className">,
    PropsWithChildren {}

const Box = ({ className, children }: BoxProps) => {
  return (
    <div
      className={cx(
        className,
        "flex flex-col rounded-30 border border-dark bg-light p-2 shadow-outer-8",
      )}
    >
      {children}
    </div>
  );
};

export default Box;

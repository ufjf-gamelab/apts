import { cx } from "class-variance-authority";
import { type ReactNode } from "react";

export type CurrentColumn = "first" | "second";

const columnStyle = cx("flex-grow flex-col", "split:basis-[50%]");

interface PageProps {
  first: ReactNode;
  second: ReactNode;
  current: CurrentColumn;
}

const Page = ({ first, second, current }: PageProps) => {
  const showColumn = (currentPage: CurrentColumn, thisPage: CurrentColumn) =>
    cx(currentPage === thisPage ? "flex" : "max-split:hidden");

  return (
    <div className="m-4 flex flex-grow gap-8">
      <div className={cx(columnStyle, showColumn(current, "first"))}>
        {first}
      </div>
      <div className={cx(columnStyle, showColumn(current, "second"))}>
        {second}
      </div>
    </div>
  );
};

export default Page;

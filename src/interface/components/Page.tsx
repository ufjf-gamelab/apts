import { cx } from "class-variance-authority";
import { type ReactNode, useState } from "react";

type CurrentPage = "initial" | "final";

interface PageProps {
  initial: ReactNode;
  final: ReactNode;
}

const Page = ({ initial, final }: PageProps) => {
  const [currentPage, setCurrentPage] = useState<CurrentPage>("final");

  const showColumn = (currentPage: CurrentPage, thisPage: CurrentPage) => {
    return cx(currentPage === thisPage ? "flex" : "max-md:hidden");
  };

  return (
    <div className="m-4 flex flex-grow gap-8">
      <div className={cx(columnStyle, showColumn(currentPage, "initial"))}>
        {initial}
      </div>
      <div className={cx(columnStyle, showColumn(currentPage, "final"))}>
        {final}
      </div>
    </div>
  );
};

const columnStyle = "flex flex-grow basis-[50%] flex-col";

export default Page;

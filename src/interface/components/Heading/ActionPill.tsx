import {
  IconFrame,
  IconListSearch,
  IconPencil,
  IconPlus,
} from "@tabler/icons-react";
import { cx } from "class-variance-authority";

import { capitalizeFirstLetter } from "../../../formatting";
import type { PageAction } from "../../ui";
import Text from "../Text";

export interface ActionPillProps {
  pageAction: PageAction;
}

const ActionPill = ({ pageAction }: ActionPillProps) => {
  const icon = ((): JSX.Element => {
    switch (pageAction) {
      case "add":
        return (
          <IconPlus aria-disabled stroke={2} className={cx(iconStyle, "p-0")} />
        );
      case "edit":
        return (
          <IconPencil
            aria-disabled
            stroke={2}
            className={cx(iconStyle, "pl-[0.1875rem] pr-[0.0625rem]")}
          />
        );
      case "view":
        return <IconFrame aria-disabled stroke={2} className={cx(iconStyle)} />;
      default:
        return (
          <IconListSearch aria-disabled stroke={2} className={cx(iconStyle)} />
        );
    }
  })();

  return (
    <div className="flex">
      <div className="flex border-r-2 border-dark bg-secondary-common">
        {icon}
      </div>
      <div className="flex items-center px-2">
        <Text
          content={capitalizeFirstLetter(pageAction)}
          fontFamily="heading"
          size="small"
        />
      </div>
    </div>
  );
};

const iconStyle = cx(
  "stroke-light p-[0.125rem]",
  "size-[1.625rem]",
  "md:size-[1.875rem]",
  "lg:size-[2.375rem]",
);

export default ActionPill;

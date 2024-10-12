import { cva } from "class-variance-authority";
import { type HTMLAttributes, useState } from "react";
import { ListBox, ListBoxItem } from "react-aria-components";

import Input from "./Field";
import Text from "./Text";

export interface Item {
  id: string;
  value: string;
  selected?: boolean;
}

const itemStyle = cva(
  "rounded-30 border-2 border-dark px-2 py-1 shadow-outer-2",
  {
    defaultVariants: {
      selected: false,
    },
    variants: {
      selected: {
        false: "mr-8 bg-light",
        true: "bg-accent-common",
      },
    },
  },
);

interface ListProps extends Pick<HTMLAttributes<HTMLDivElement>, "aria-label"> {
  items: Item[];
}

const List = ({ "aria-label": ariaLabel, items }: ListProps) => {
  const [searchText, setSearchText] = useState("");

  return (
    //TODO: Check these aria-labels
    <section className="gap-4" aria-label={ariaLabel}>
      <Input
        label="Search"
        hiddenLabel={true}
        fontFamily="heading"
        setValue={setSearchText}
      />
      <ListBox items={items} className="ml-4 gap-4">
        {(item) => (
          <ListBoxItem
            id={item.id}
            className={itemStyle({ selected: item.selected })}
            textValue={item.value}
          >
            <Text content={item.value} fontFamily="heading" size="medium" />
          </ListBoxItem>
        )}
      </ListBox>
    </section>
  );
};

export default List;

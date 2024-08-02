import { type HTMLAttributes, useState } from "react";

import Input from "../Input";
import ListItem, { type Item } from "./Item";

interface ListProps extends Pick<HTMLAttributes<HTMLDivElement>, "aria-label"> {
  items: Item[];
}

const List = ({ "aria-label": ariaLabel, items }: ListProps) => {
  const [searchText, setSearchText] = useState("");

  return (
    <section aria-label={ariaLabel} className="flex flex-col gap-4">
      <Input
        label="Search"
        hiddenLabel={true}
        value={searchText}
        setValue={setSearchText}
        className=""
      />
      <div className="ml-4 flex flex-col gap-4">
        {items.map((item) => (
          <ListItem
            key={item.key}
            value={item.value}
            selected={item.selected}
          />
        ))}
      </div>
    </section>
  );
};

export default List;

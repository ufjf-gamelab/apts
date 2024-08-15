import { type HTMLAttributes, useState } from "react";

import Input from "../Field";
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
        fontFamily="heading"
        setValue={setSearchText}
      />
      <div className="ml-4 flex flex-col gap-4">
        {items.map((item) => (
          <ListItem
            key={item.identifier}
            value={item.value}
            selected={item.selected}
          />
        ))}
      </div>
    </section>
  );
};

export default List;

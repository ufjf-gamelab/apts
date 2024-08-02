import { cva } from "class-variance-authority";

import Text from "../Text";

export type Item = {
  key: string;
  value: string;
  selected?: boolean;
};

interface ListItemProps extends Item {}

const ListItem = ({ key, value, selected = false }: ListItemProps) => {
  return (
    <div className={itemStyle({ selected })} key={key}>
      <Text content={value} fontFamily="heading" size="medium" />
    </div>
  );
};

const itemStyle = cva(
  "flex flex-col rounded-30 border-2 border-dark px-2 py-1 shadow-outer-2",
  {
    variants: {
      selected: {
        true: "bg-accent-common",
        false: "mr-8 bg-light",
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
);

export default ListItem;

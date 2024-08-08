import { cx } from "class-variance-authority";
import { useState } from "react";

import Box from "../../components/Box";
import Button from "../../components/Button";
import Content from "../../components/Content";
import type { Item } from "../../components/List/Item";
import ListComponent from "../../components/List/List";
import Page from "../../components/Page";
import Text from "../../components/Text";
import type { Game } from "../../types/interfaceTypes";

interface ListProps {}

const List = ({}: ListProps) => {
  const games: Game[] = [
    {
      id: "1",
      title: "Tic-tac-toe",
    },
    {
      id: "2",
      title: "Connect Four",
    },
    {
      id: "3",
      title: "Book",
    },
  ];

  const selectedKey = "2";

  const items: Item[] = games.map((game) => {
    return {
      key: game.id,
      value: game.title,
      selected: game.id === selectedKey,
    };
  });

  return (
    <Page
      initial={
        <div className={cx(columnStyle, "gap-4", "md:ml-4")}>
          <ListComponent items={items} />
        </div>
      }
      final={
        <div className={cx(columnStyle, "sm:mr-4")}>
          <Box>
            <Content title="Connect4">
              <Text element="p" size="small" content="Howard Wexler" />
            </Content>
          </Box>
          <Box className="mt-2">
            <Content title="Information">
              <Text
                element="p"
                size="small"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum numquam esse enim molestias quos dicta dolores, inventore, commodi error explicabo aliquam distinctio eos ipsum aliquid minus vitae mollitia sapiente soluta!"
              />
            </Content>
          </Box>

          <Button icon="return" text="Return" />
          <Button icon="edit" text="Return" />
          <Button icon="return" text="Return" />
        </div>
      }
    />
  );
};

const columnStyle = "flex flex-grow flex-col";

export default List;

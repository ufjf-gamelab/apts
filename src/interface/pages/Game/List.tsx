import { cx } from "class-variance-authority";
import { createContext, useContext, useEffect, useState } from "react";

import { GameStore } from "../../../database/database";
import { type GameType } from "../../../model/game";
import Box from "../../components/Box";
import Button from "../../components/Button/Button";
import ButtonGroup from "../../components/Button/ButtonGroup";
import ColumnNavigator from "../../components/Button/ColumnNavigator";
import Content from "../../components/Content";
import ListComponent, { type Item } from "../../components/List";
import Loading from "../../components/Loading";
import Page, { type CurrentColumn } from "../../components/Page";
import Text from "../../components/Text";

interface ListProps {}

const PageContext = createContext<(target: CurrentColumn) => void>(
  () => "first",
);

const List = ({}: ListProps) => {
  const [currentColumn, setCurrentColumn] = useState<CurrentColumn>("first");

  return (
    <PageContext.Provider
      value={(targetColumn) => setCurrentColumn(targetColumn)}
    >
      <Page
        first={<FirstColumn />}
        second={<SecondColumn />}
        current={currentColumn}
      />
    </PageContext.Provider>
  );
};

export default List;

const columnStyle = "flex flex-grow flex-col";

const FirstColumn = () => {
  const setCurrentColumn = useContext(PageContext);

  const [gameItems, setGameItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const selectedGameId = "2";

  useEffect(() => {
    const fetchGames = async () => {
      let gameItems: Item[] = [];
      GameStore.iterate((value: GameType, id) => {
        gameItems = [
          ...gameItems,
          {
            id,
            value: value.title,
            selected: id === selectedGameId,
          },
        ];
      })
        .then(() => {
          setGameItems(gameItems);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchGames();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={cx(columnStyle, "gap-4", "md:ml-4")}>
      <ListComponent items={gameItems} />

      <div className="mr-2 flex justify-end">
        <ButtonGroup intent="page-navigation">
          <ColumnNavigator
            icon="next"
            size="large"
            intent="secondary"
            text="Select"
            setCurrentColumn={setCurrentColumn}
            targetColumn="second"
          />
        </ButtonGroup>
      </div>
    </div>
  );
};

const SecondColumn = () => {
  const setCurrentColumn = useContext(PageContext);

  return (
    <div className={cx(columnStyle, "gap-6 sm:mr-4")}>
      <div className="flex flex-col gap-2">
        <Box>
          <Content title="Connect4">
            <Text size="small" content="Howard Wexler" />
          </Content>
        </Box>
        <Box>
          <Content title="Information">
            <Text
              size="small"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum numquam esse enim molestias quos dicta dolores, inventore, commodi error explicabo aliquam distinctio eos ipsum aliquid minus vitae mollitia sapiente soluta!"
            />
          </Content>
        </Box>
      </div>

      <div className="mr-2 flex justify-end">
        <ButtonGroup intent="page-navigation">
          <ColumnNavigator
            icon="previous"
            size="large"
            intent="accent"
            text="Previous"
            setCurrentColumn={setCurrentColumn}
            targetColumn="first"
          />
          <Button icon="edit" size="large" intent="warning" text="Edit" />
          <Button icon="next" size="large" intent="secondary" text="Select" />
        </ButtonGroup>
      </div>
    </div>
  );
};

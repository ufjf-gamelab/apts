import { cx } from "class-variance-authority";
import { useState } from "react";

import Box from "../../components/Box";
import Content from "../../components/Content";
import Input from "../../components/Input";
import Page from "../../components/Page";
import Text from "../../components/Text";

interface ListProps {}

const List = ({}: ListProps) => {
  const [searchText, setSearchText] = useState("");

  return (
    <Page
      initial={
        <div className={cx(columnStyle, "md:ml-4")}>
          <Input
            label="Search"
            hiddenLabel={true}
            value={searchText}
            setValue={setSearchText}
            className=""
          />
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
        </div>
      }
    />
  );
};

const columnStyle = "flex flex-grow flex-col";

export default List;

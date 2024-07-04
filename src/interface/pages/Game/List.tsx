import { cx } from "class-variance-authority";

import Box from "../../components/Box";
import Content from "../../components/Content";
import Page from "../../components/Page";
import Text from "../../components/Text";

interface ListProps {}

const List = ({}: ListProps) => {
  return (
    <Page
      initial={
        <div className="md:ml-4">
          <Box></Box>
        </div>
      }
      final={
        <div className={cx("flex flex-grow flex-col", "sm:mr-4")}>
          <Box className="mb-4">
            <Content title="Connect4">
              <Text element="p" size="small" content="Howard Wexler" />
            </Content>
          </Box>
          <Box className="">
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

export default List;

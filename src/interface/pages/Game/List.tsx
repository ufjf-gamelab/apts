import Box from "../../components/Box";
import Page from "../../components/Page";
import Section from "../../components/Section";
import Text from "../../components/Text";

interface ListProps {}

const List = ({}: ListProps) => {
    return (
        <Page
            left={
                <Box>
                    <Section title="Banana">
                        <Text content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum numquam esse enim molestias quos dicta dolores, inventore, commodi error explicabo aliquam distinctio eos ipsum aliquid minus vitae mollitia sapiente soluta!" />
                    </Section>
                </Box>
            }
            right={<Box></Box>}
        />
    );
};

export default List;

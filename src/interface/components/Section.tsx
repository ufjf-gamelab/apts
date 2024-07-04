import type { PropsWithChildren } from "react";

import Text from "./Text";

interface SectionProps extends PropsWithChildren {
    title: string;
}

const Section = ({ children, title }: SectionProps) => {
    return (
        <section>
            <header>
                <Text font-family={"heading"} content={title} />
            </header>
            {children}
        </section>
    );
};

export default Section;

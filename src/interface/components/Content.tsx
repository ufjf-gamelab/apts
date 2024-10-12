import type { PropsWithChildren } from "react";

import Text from "./Text";

interface ContentProps extends PropsWithChildren {
  title: string;
}

const Content = ({ children, title }: ContentProps) => (
  <section>
    <header>
      <Text fontFamily={"heading"} size="large" element="h2" content={title} />
    </header>
    {children}
  </section>
);

export default Content;

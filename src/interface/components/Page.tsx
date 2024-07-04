import type { ReactNode } from "react";

interface PageProps {
    left: ReactNode;
    right: ReactNode;
}

const Page = ({ left, right }: PageProps) => {
    return (
        <article className="m-4 flex gap-4">
            <div className="basis-[50%]">{left}</div>
            <div className="basis-[50%]">{right}</div>
        </article>
    );
};

export default Page;

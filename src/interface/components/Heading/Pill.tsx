import { cx } from "class-variance-authority";
import type { PropsWithChildren } from "react";

interface PillProps extends PropsWithChildren {
    id?: React.ComponentProps<"section">["id"];
    "aria-label"?: React.ComponentProps<"section">["aria-label"];
    className?: React.ComponentProps<"section">["className"];
}

const Pill = ({
    children,
    id,
    "aria-label": ariaLabel,
    className,
}: PillProps) => {
    return (
        <section
            id={id}
            aria-label={ariaLabel}
            className={cx(
                "rounded-full border-2 bg-light",
                "shadow-outer-2",
                "md:shadow-outer-3",
                "lg:shadow-outer-4",
                className,
            )}
        >
            {children}
        </section>
    );
};

export default Pill;

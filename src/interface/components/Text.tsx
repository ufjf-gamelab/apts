import { type VariantProps, cva, cx } from "class-variance-authority";

import { type Element } from "../ui";

interface TextProps extends VariantProps<typeof textStyle> {
    element?: Element;
    content: string;
}

const Text = ({
    "font-family": fontFamily,
    size,
    element,
    content,
}: TextProps) => {
    switch (element) {
        case "h1":
            return (
                <h1 className={textStyle({ "font-family": fontFamily, size })}>
                    {content}
                </h1>
            );
        case "h2":
            return (
                <h2 className={textStyle({ "font-family": fontFamily, size })}>
                    {content}
                </h2>
            );
        default:
            return (
                <p className={textStyle({ "font-family": fontFamily, size })}>
                    {content}
                </p>
            );
    }
};

const textStyle = cva("text-center font-semibold text-inherit", {
    variants: {
        "font-family": {
            common: "font-common",
            heading: "font-heading",
        },
        size: {
            small: cx(
                "px-1 py-[0.0625rem] text-base",
                "md:px-[0.375rem] md:text-lg",
                "lg:px-2 lg:text-3xl",
            ),
            large: cx(
                "px-2 py-[0.125rem] text-2xl",
                "md:px-3 md:py-1 md:text-3xl",
                "lg:px-4 lg:py-2 lg:text-4xl",
            ),
        },
    },
    defaultVariants: {
        size: "small",
        "font-family": "common",
    },
});

export default Text;

import { cva, cx, type VariantProps } from "class-variance-authority";
import type { FC } from "react";
import { Element } from "../ui";

interface TextProps extends VariantProps<typeof textStyle> {
	element?: Element.h1 | Element.h2 | Element.p;
	content?: string;
	"aria-label"?: React.ComponentProps<"p">["aria-label"];
}

const Text: FC<TextProps> = ({
	"font-family": fontFamily,
	size,
	element,
	content,
	"aria-label": ariaLabel,
}) => {
	switch (element) {
		case Element.h1:
			return (
				<h1
					aria-label={ariaLabel}
					className={textStyle({ "font-family": fontFamily, size })}
				>
					{content}
				</h1>
			);
		case Element.h2:
			return (
				<h2
					aria-label={ariaLabel}
					className={textStyle({ "font-family": fontFamily, size })}
				>
					{content}
				</h2>
			);
		default:
			return (
				<p
					aria-label={ariaLabel}
					className={textStyle({ "font-family": fontFamily, size })}
				>
					{content}
				</p>
			);
	}
};

export default Text;

const textStyle = cva("text-inherit text-center font-semibold", {
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

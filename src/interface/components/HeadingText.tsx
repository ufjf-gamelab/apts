import { clsx } from "clsx/lite";
import { Element } from "../ui";

const enum Size {
	small = "small",
	large = "large",
}

export interface HeadingTextProps {
	text: string;
	element?: Element.h1 | Element.h2 | Element.p;
	size?: `${Size.small}` | `${Size.large}`;
}

export default function HeadingText({
	text,
	element = Element.p,
	size = Size.small,
}: HeadingTextProps) {
	const sizeClasses = (() => {
		switch (size) {
			case Size.large:
				return clsx(
					"py-[0.125rem] text-2xl px-2 md:px-3 lg:px-4 md:py-1 lg:py-2 md:text-3xl lg:text-5xl",
				);
			default:
				return clsx(
					"py-[0.0625rem] md:px-[0.375rem] lg:px-2 text-base lg:text-3xl md:text-lg px-1",
				);
		}
	})();
	const className = clsx("font-heading font-semibold text-center", sizeClasses);

	switch (element) {
		case Element.h1:
			return <h1 className={className}>{text}</h1>;
		case Element.h2:
			return <h2 className={className}>{text}</h2>;
		case Element.p:
			return <p className={className}>{text}</p>;
	}
}

import { cx } from "class-variance-authority";
import { Element } from "../../ui";

const enum Size {
	small = "small",
	large = "large",
}

export interface Title {
	text: string;
	element?: Element.h1 | Element.h2 | Element.p;
	size?: `${Size.small}` | `${Size.large}`;
}

export default function Title({
	text,
	element = Element.p,
	size = Size.small,
}: Title) {
	const sizeClasses = (() => {
		switch (size) {
			case Size.large:
				return cx(
					"px-2 py-[0.125rem] text-2xl md:px-3 md:py-1 md:text-3xl lg:px-4 lg:py-2 lg:text-5xl",
				);
			default:
				return cx(
					"px-1 py-[0.0625rem] text-base md:px-[0.375rem] md:text-lg lg:px-2 lg:text-3xl",
				);
		}
	})();
	const className = cx("text-center font-heading font-semibold", sizeClasses);

	switch (element) {
		case Element.h1:
			return <h1 className={className}>{text}</h1>;
		case Element.h2:
			return <h2 className={className}>{text}</h2>;
		default:
			return <p className={className}>{text}</p>;
	}
}

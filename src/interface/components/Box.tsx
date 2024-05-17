import clsx from "clsx/lite";
import type { PropsWithChildren } from "react";

export interface BoxProps extends React.ComponentProps<"section"> {
	rounded?: boolean;
}

export default function Box({
	children,
	rounded = false,
	className,
	...otherProps
}: PropsWithChildren<BoxProps>) {
	return (
		<section
			className={clsx(
				"border-2 bg-light",
				rounded && "rounded-full",
				className,
			)}
			{...otherProps}
		>
			{children}
		</section>
	);
}

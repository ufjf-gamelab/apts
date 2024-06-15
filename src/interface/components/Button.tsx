import { IconArrowBackUp, IconPencil, IconPlus } from "@tabler/icons-react";
import clsx from "clsx/lite";
import { Button as ReactAriaButton } from "react-aria-components";

const enum Icon {
	add = "add",
	edit = "edit",
	return = "return",
}

const enum Size {
	small = "small",
	large = "large",
}

const enum Color {
	primary = "primary",
	secondary = "secondary",
	accent = "accent",
	danger = "danger",
	warning = "warning",
	success = "success",
	inactive = "inactive",
}

interface ButtonProps {
	icon?: `${Icon.add}` | `${Icon.edit}` | `${Icon.return}`;
	size?: `${Size.small}` | `${Size.large}`;
	color?:
		| `${Color.primary}`
		| `${Color.secondary}`
		| `${Color.accent}`
		| `${Color.danger}`
		| `${Color.warning}`
		| `${Color.success}`
		| `${Color.inactive}`;
	"aria-label": React.ComponentProps<"button">["aria-label"];
}

export default function Button({
	icon,
	size = Size.small,
	color = Color.primary,
	"aria-label": ariaLabel,
}: ButtonProps) {
	const { buttonColorClassName, iconColorClassName } = (() => {
		switch (color) {
			case Color.secondary:
				return {
					buttonColorClassName: clsx(
						"bg-secondary-light",
						"hover:bg-secondary-common",
						"active:bg-secondary-dark",
						"data-[pressed]:bg-secondary-dark",
					),
					iconColorClassName: clsx(),
				};
			case Color.accent:
				return {
					buttonColorClassName: clsx(
						"bg-accent-light",
						"hover:bg-accent-common",
						"active:bg-accent-dark",
						"data-[pressed]:bg-accent-dark",
					),
					iconColorClassName: clsx(),
				};
			case Color.danger:
				return {
					buttonColorClassName: clsx(
						"bg-danger-light",
						"hover:bg-danger-common",
						"active:bg-danger-dark",
						"data-[pressed]:bg-danger-dark",
					),
					iconColorClassName: clsx(),
				};
			case Color.warning:
				return {
					buttonColorClassName: clsx(
						"bg-warning-light",
						"hover:bg-warning-common",
						"active:bg-warning-dark",
						"data-[pressed]:bg-warning-dark",
					),
					iconColorClassName: clsx(),
				};
			case Color.success:
				return {
					buttonColorClassName: clsx(
						"bg-success-light",
						"hover:bg-success-common",
						"active:bg-success-dark",
						"data-[pressed]:bg-success-dark",
					),
					iconColorClassName: clsx(),
				};
			case Color.inactive:
				return {
					buttonColorClassName: clsx(
						"bg-inactive-light",
						"hover:bg-inactive-common",
						"active:bg-inactive-dark",
						"data-[pressed]:bg-inactive-dark",
					),
					iconColorClassName: clsx(),
				};
			default:
				return {
					buttonColorClassName: clsx(
						"bg-primary-light",
						"hover:bg-primary-common",
						"active:bg-primary-dark",
						"data-[pressed]:bg-primary-dark",
					),
					iconColorClassName: clsx(),
				};
		}
	})();

	const buttonClassName = clsx(
		buttonColorClassName,
		"rounded-full border-2 shadow-outer-2",
		"md:shadow-outer-3",
		"lg:shadow-outer-4",
	);
	const iconClassName = clsx(iconColorClassName, "size-full");

	const iconComponent = (() => {
		switch (icon) {
			case Icon.add:
				return <IconPlus stroke={2} aria-disabled className={iconClassName} />;
			case Icon.edit:
				return (
					<IconPencil stroke={2} aria-disabled className={iconClassName} />
				);
			case Icon.return:
				return (
					<IconArrowBackUp stroke={2} aria-disabled className={iconClassName} />
				);
			default:
				return null;
		}
	})();

	return (
		<ReactAriaButton aria-label={ariaLabel} className={buttonClassName}>
			{iconComponent}
		</ReactAriaButton>
	);
}

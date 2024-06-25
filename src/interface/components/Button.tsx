import { IconArrowBackUp, IconPencil, IconPlus } from "@tabler/icons-react";
import { cva, cx, type VariantProps } from "class-variance-authority";
import type { FC } from "react";
import { Button as ReactAriaButton } from "react-aria-components";

const enum Icon {
	add = "add",
	edit = "edit",
	return = "return",
}

interface ButtonProps extends VariantProps<typeof buttonStyle> {
	icon?: `${Icon.add}` | `${Icon.edit}` | `${Icon.return}`;
	text?: string;
	"aria-label": React.ComponentProps<"button">["aria-label"];
}

const Button: FC<ButtonProps> = ({
	intent,
	size,
	icon,
	text,
	"aria-label": ariaLabel,
}: ButtonProps) => {
	const iconComponent = (() => {
		switch (icon) {
			case Icon.add:
				return (
					<IconPlus stroke={2} aria-disabled className={iconStyle({ size })} />
				);
			case Icon.edit:
				return (
					<IconPencil
						stroke={2}
						aria-disabled
						className={iconStyle({ size })}
					/>
				);
			case Icon.return:
				return (
					<IconArrowBackUp
						stroke={2}
						aria-disabled
						className={iconStyle({ size })}
					/>
				);
			default:
				return null;
		}
	})();

	return (
		<ReactAriaButton
			aria-label={ariaLabel}
			className={buttonStyle({ intent, size })}
		>
			{iconComponent}
			<p>{text}</p>
		</ReactAriaButton>
	);
};

export default Button;

const iconStyle = cva("", {
	variants: {
		size: {
			small: cx("size-5"),
			large: cx("size-8"),
		},
	},
	defaultVariants: {
		size: "small",
	},
});

const buttonStyle = cva(
	cx(
		"flex items-center rounded-full border-2 px-2 font-semibold shadow-outer-2 shadow-dark",
		"md:shadow-outer-3",
		"lg:shadow-outer-4",
	),
	{
		variants: {
			intent: {
				primary: cx(
					"light bg-primary-light text-light *:stroke-light",
					"hover:bg-primary-common",
					"active:bg-primary-dark",
					"data-[pressed]:bg-primary-dark",
				),
				secondary: cx(
					"bg-secondary-light text-light *:stroke-light",
					"hover:bg-secondary-common",
					"active:bg-secondary-dark",
					"data-[pressed]:bg-secondary-dark",
				),
				accent: cx(
					"bg-accent-light text-dark *:stroke-dark",
					"hover:bg-accent-common",
					"active:bg-accent-dark",
					"data-[pressed]:bg-accent-dark",
				),
				danger: cx(
					"bg-danger-light text-light *:stroke-light",
					"hover:bg-danger-common",
					"active:bg-danger-dark",
					"data-[pressed]:bg-danger-dark",
				),
				warning: cx(
					"bg-warning-light text-dark *:stroke-dark",
					"hover:bg-warning-common",
					"active:bg-warning-dark",
					"data-[pressed]:bg-warning-dark",
				),
				success: cx(
					"bg-success-light text-light *:stroke-light",
					"hover:bg-success-common",
					"active:bg-success-dark",
					"data-[pressed]:bg-success-dark",
				),
				inactive: cx(
					"bg-inactive-light text-light *:stroke-light",
					"hover:bg-inactive-common",
					"active:bg-inactive-dark",
					"data-[pressed]:bg-inactive-dark",
				),
			},
			size: {
				small: cx("text-lg"),
				large: cx("py-1 text-2xl"),
			},
		},
		defaultVariants: {
			intent: "primary",
			size: "small",
		},
	},
);

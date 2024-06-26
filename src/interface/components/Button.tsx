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
		"flex items-center rounded-full border-2 px-2 font-semibold outline-offset-2",
		"shadow-outer-2 shadow-dark",
		"md:shadow-outer-3 md:shadow-dark",
		"lg:shadow-outer-4 lg:shadow-dark",
		"active:shadow-inner-2 active:shadow-dark",
		"focus-visible:outline",
		"data-[pressed]:shadow-inner-2 data-[pressed]:shadow-dark",
	),
	{
		variants: {
			intent: {
				primary: cx(
					"bg-primary-common text-light",
					"hover:bg-primary-dark",
					"active:bg-primary-dark",
					"focus-visible:outline-primary-light",
					"data-[pressed]:bg-primary-dark",
					"*:stroke-light",
				),
				secondary: cx(
					"bg-secondary-common text-light",
					"hover:bg-secondary-dark",
					"active:bg-secondary-dark",
					"focus-visible:outline-secondary-light",
					"data-[pressed]:bg-secondary-dark",
					"*:stroke-light",
				),
				accent: cx(
					"bg-accent-common text-dark",
					"hover:bg-accent-dark",
					"active:bg-accent-dark",
					"focus-visible:outline-accent-light",
					"data-[pressed]:bg-accent-dark",
					"*:stroke-dark",
				),
				danger: cx(
					"bg-danger-common text-light",
					"hover:bg-danger-dark",
					"active:bg-danger-dark",
					"focus-visible:outline-danger-light",
					"data-[pressed]:bg-danger-dark",
					"*:stroke-light",
				),
				warning: cx(
					"bg-warning-common text-dark",
					"hover:bg-warning-dark",
					"active:bg-warning-dark",
					"focus-visible:outline-warning-light",
					"data-[pressed]:bg-warning-dark",
					"*:stroke-dark",
				),
				success: cx(
					"bg-success-common text-light",
					"hover:bg-success-dark",
					"active:bg-success-dark",
					"focus-visible:outline-success-light",
					"data-[pressed]:bg-success-dark",
					"*:stroke-light",
				),
				inactive: cx(
					"bg-inactive-common text-light",
					"hover:bg-inactive-dark",
					"active:bg-inactive-dark",
					"focus-visible:outline-inactive-light",
					"data-[pressed]:bg-inactive-dark",
					"*:stroke-light",
				),
			},
			size: {
				small: cx("text-lg", "md:text"),
				large: cx("py-1 text-2xl"),
			},
		},
		defaultVariants: {
			intent: "primary",
			size: "small",
		},
	},
);

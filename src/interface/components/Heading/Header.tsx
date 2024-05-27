import clsx from "clsx/lite";
import { Element } from "../../ui";
import Button from "../Button";
import ActionPill, { type ActionPillProps } from "./ActionPill";
import Logotype from "./Logotype";
import Pill from "./Pill";
import Title from "./Title";

interface HeaderProps extends ActionPillProps {
	pageTitle: string;
}

export default function Header({ pageTitle, pageAction }: HeaderProps) {
	return (
		<header
			className={clsx(
				"flex items-center border-b-4 bg-primary-common",
				"sm:h-14",
				"md:h-16 md:border-b-[6px]",
				"lg:h-[5.5rem] lg:border-b-8",
			)}
		>
			<div
				id="logotype"
				className={clsx(
					"hidden h-full",
					"sm:block sm:border-r-4",
					"md:border-r-[6px]",
					"lg:border-r-8",
				)}
			>
				<Logotype />
			</div>
			<div
				id="header-contents"
				className={clsx(
					"flex grow items-end gap-2 p-2",
					"sm:px-4",
					"md:gap-4 md:px-6",
				)}
			>
				<Pill id="header-page-name" aria-label="Page">
					<Title text={pageTitle} element={Element.h1} size="large" />
				</Pill>
				<Pill
					id="header-page-action"
					aria-label="Page action"
					className="flex items-center overflow-clip"
				>
					<ActionPill pageAction={pageAction} />
				</Pill>
			</div>
			<div className="h-full items-end">
				<Button icon="add" color="accent" aria-label="Add" />
			</div>
		</header>
	);
}

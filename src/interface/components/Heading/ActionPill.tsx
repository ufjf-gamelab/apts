import {
	IconFrame,
	IconListSearch,
	IconPencil,
	IconPlus,
} from "@tabler/icons-react";
import clsx from "clsx/lite";
import { capitalizeFirstLetter } from "../../../formatting";
import { Element } from "../../ui";
import Title from "./Title";

const enum PageAction {
	list = "list",
	add = "add",
	edit = "edit",
	view = "view",
}

export interface ActionPillProps {
	pageAction:
		| `${PageAction.list}`
		| `${PageAction.add}`
		| `${PageAction.edit}`
		| `${PageAction.view}`;
}

export default function ActionPill({ pageAction }: ActionPillProps) {
	const iconClassname = clsx(
		"size-[1.625rem] border-r-2 p-[0.125rem] bg-secondary-common stroke-light",
		"md:size-[1.875rem]",
		"lg:size-[2.375rem]",
	);

	const icon = (() => {
		switch (pageAction) {
			case PageAction.list:
				return (
					<IconListSearch aria-disabled stroke={2} className={iconClassname} />
				);
			case PageAction.add:
				return (
					<IconPlus
						aria-disabled
						stroke={2}
						className={clsx(iconClassname, "p-0")}
					/>
				);
			case PageAction.edit:
				return (
					<IconPencil
						aria-disabled
						stroke={2}
						className={clsx(iconClassname, "pl-[0.1875rem] pr-[0.0625rem]")}
					/>
				);
			default:
				return <IconFrame aria-disabled stroke={2} className={iconClassname} />;
		}
	})();

	return (
		<>
			{icon}
			<Title
				text={capitalizeFirstLetter(pageAction)}
				element={Element.p}
				size="small"
			/>
		</>
	);
}

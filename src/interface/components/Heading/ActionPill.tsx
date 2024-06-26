import {
	IconFrame,
	IconListSearch,
	IconPencil,
	IconPlus,
} from "@tabler/icons-react";
import { cx } from "class-variance-authority";
import { capitalizeFirstLetter } from "../../../formatting";
import { Element } from "../../ui";
import Text from "../Text";

export const enum PageAction {
	list = "list",
	add = "add",
	edit = "edit",
	view = "view",
}

export interface ActionPillProps {
	pageAction: PageAction;
}

export default function ActionPill({ pageAction }: ActionPillProps) {
	const iconClassName = cx(
		"size-[1.625rem] border-r-2 bg-secondary-common stroke-light p-[0.125rem]",
		"md:size-[1.875rem]",
		"lg:size-[2.375rem]",
	);

	const icon = (() => {
		switch (pageAction) {
			case PageAction.add:
				return (
					<IconPlus
						aria-disabled
						stroke={2}
						className={cx(iconClassName, "p-0")}
					/>
				);
			case PageAction.edit:
				return (
					<IconPencil
						aria-disabled
						stroke={2}
						className={cx(iconClassName, "pl-[0.1875rem] pr-[0.0625rem]")}
					/>
				);
			case PageAction.view:
				return <IconFrame aria-disabled stroke={2} className={iconClassName} />;
			default:
				return (
					<IconListSearch aria-disabled stroke={2} className={iconClassName} />
				);
		}
	})();

	return (
		<>
			{icon}
			<Text
				content={capitalizeFirstLetter(pageAction)}
				element={Element.p}
				font-family="heading"
				size="small"
			/>
		</>
	);
}

import clsx from "clsx/lite";
import { Element } from "../../ui";
import Box from "../Heading/Box";
import type { ActionPillProps } from "./ActionPill";
import ActionPill from "./ActionPill";
import Logotype from "./Logotype";
import Title from "./Title";

interface HeaderProps extends ActionPillProps {
	pageTitle: string;
}

export default function Header({ pageTitle, pageAction }: HeaderProps) {
	return (
		<header
			className={clsx(
				"flex items-center border-b-4 bg-primary-common",
				"md:border-b-[6px]",
				"lg:border-b-8",
			)}
		>
			<div
				id="logotype"
				className={clsx(
					"hidden",
					"sm:block sm:h-14 sm:border-r-4",
					"md:h-16 md:border-r-[6px]",
					"lg:h-[5.5rem] lg:border-r-8",
				)}
			>
				<Logotype />
			</div>
			<div
				id="header-contents"
				className={clsx(
					"flex items-end gap-2 p-2",
					"sm:px-4",
					"md:gap-4 md:px-6",
				)}
			>
				{/* <Breadcrumbs aria-label="Breadcrumb">
					<Breadcrumb aria-label="Show more items">
						<Link to="/">
							<Box>
								<Button id="header-breadcrumb-button" className="p-1">
									<IconMenu2
										aria-disabled
										stroke={2}
										className={clsx(
											"size-[1.625rem]",
											"md:size-[1.875rem]",
											"lg:size-[2.375rem]",
										)}
									/>
								</Button>
							</Box>
						</Link>
					</Breadcrumb>
				</Breadcrumbs> */}
				<Box id="header-page-name" aria-label="Page">
					<Title text={pageTitle} element={Element.h1} size="large" />
				</Box>
				<Box
					id="header-page-action"
					aria-label="Page action"
					className="flex items-center overflow-clip"
				>
					<ActionPill pageAction={pageAction} />
				</Box>
			</div>
		</header>
	);
}

import { IconMenu2, IconPlus } from "@tabler/icons-react";
import clsx from "clsx/lite";
import { Outlet } from "react-router-dom";
import Box from "../../components/Box";
import HeadingText from "../../components/HeadingText";
import Logotype from "../../components/Logotype";
import { Element } from "../../ui";

export default function Home() {
	return (
		<article>
			<header
				className={clsx(
					"flex items-center border-b-4 bg-primary-common",
					"md:border-b-[6px]",
					"lg:border-b-8",
				)}
			>
				<div
					className={clsx(
						"hidden",
						"sm:block sm:h-14 sm:border-r-4",
						"md:h-20 md:border-r-[6px]",
						"lg:h-24 lg:border-r-8",
					)}
				>
					<Logotype />
				</div>
				<div
					className={clsx(
						"flex items-end gap-2 p-2",
						"sm:px-4",
						"md:gap-4 md:px-6",
					)}
				>
					<Box rounded className={clsx("shadow-outer-2 p-1", "md:hidden")}>
						<IconMenu2 stroke={2} className="" />
					</Box>
					<Box
						rounded
						aria-label="Page"
						className={clsx("shadow-outer-2", "md:shadow-outer-4")}
					>
						<HeadingText text="Large title" element={Element.h1} size="large" />
					</Box>
					<Box
						rounded
						aria-label="Page action"
						className={clsx(
							"shadow-outer-2 flex items-center overflow-clip",
							"md:shadow-outer-4",
						)}
					>
						<IconPlus
							aria-disabled
							stroke={2}
							className={clsx(
								"size-[1.625rem] border-r-2 bg-secondary-common stroke-light",
								"md:size-[1.875rem]",
								"lg:size-[2.375rem]",
							)}
						/>
						<HeadingText text="List" element={Element.p} size="small" />
					</Box>
				</div>
			</header>
			<Outlet />
		</article>
	);
}

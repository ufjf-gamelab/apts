import { Outlet, useMatches, type UIMatch } from "react-router-dom";
import { PageAction } from "../../components/Heading/ActionPill";
import Header from "../../components/Heading/Header";

interface MatchHandle {
	crumb?: string;
	action?: PageAction;
}

export default function Root() {
	const matches = useMatches() as UIMatch<unknown, MatchHandle>[];
	let pageAction = PageAction.list;
	const crumbs = matches.reduce((acc, match) => {
		if (match && match.handle) {
			if (match.handle.crumb) {
				return [...acc, match.handle.crumb];
			} else if (match.handle.action) {
				pageAction = match.handle.action;
			}
		}
		return [...acc];
	}, Array<string>());
	const pageTitle = crumbs.pop() ?? "APTS";

	return (
		<article>
			<Header pageTitle={pageTitle} pageAction={pageAction} />
			<main>
				<Outlet />
			</main>
		</article>
	);
}
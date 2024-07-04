import { Outlet, type UIMatch, useMatches } from "react-router-dom";

import Header from "../../components/Heading/Header";
import type { PageAction } from "../../ui";

interface MatchHandle {
  crumb?: string;
  action?: PageAction;
}

export default function Root() {
  const matches = useMatches() as UIMatch<unknown, MatchHandle>[];
  let pageAction: PageAction = "list";
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
    <article className="flex flex-col">
      <Header pageTitle={pageTitle} pageAction={pageAction} />
      <main className="flex flex-grow flex-col">
        <Outlet />
      </main>
    </article>
  );
}

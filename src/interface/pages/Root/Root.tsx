import { Outlet } from "react-router-dom";
import Header from "../../components/Heading/Header";

export default function Home() {
	return (
		<article>
			<Header pageTitle="Game" pageAction="list" />
			<main>
				<Outlet />
			</main>
		</article>
	);
}

import { Outlet } from "react-router-dom";
import Logotype from "../../components/Logotype";

export default function Home() {
	return (
		<article className="bg-background h-full">
			<header className="border-dark bg-primary-common flex border-b-8">
				<Logotype />
				<h1 className="font-heading text-3xl font-semibold">Homepage</h1>
			</header>
			<Outlet />
		</article>
	);
}

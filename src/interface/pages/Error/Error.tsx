import { useRouteError } from "react-router-dom";

export default function Error() {
	const error = useRouteError() as {
		status?: number;
		statusText: string;
		message: string;
	};
	console.error(error);

	return (
		<article
			id="error-page"
			className="m-auto flex flex-col items-center justify-center"
		>
			<h1 className="font-heading text-5xl">Oops!</h1>
			<p className="text-xl">Sorry, an unexpected error has occurred.</p>
			<hr className="my-6 w-80 border" />
			<div className="flex flex-col items-center">
				{error.status ? <p className="text-3xl">{error.status}</p> : null}
				<p className="text-xl">
					<i>{error.statusText || error.message}</i>
				</p>
			</div>
		</article>
	);
}

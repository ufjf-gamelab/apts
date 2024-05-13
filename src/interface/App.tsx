import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";

export default function App() {
	const router = createBrowserRouter(
		[
			{
				path: "/",
				element: <Home />,
			},
		],
		{
			basename: "/apts",
		},
	);

	return <RouterProvider router={router} />;
}

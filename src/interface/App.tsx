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
			basename: import.meta.env.BASE_URL,
		},
	);

	return <RouterProvider router={router} />;
}

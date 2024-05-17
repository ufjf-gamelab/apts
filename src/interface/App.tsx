import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";

export default function App() {
	const router = createBrowserRouter(
		[
			{
				path: "/",
				element: <Home />,
				errorElement: <Error />,
				children: [
					{
						errorElement: <Error />,
						children: [],
					},
				],
			},
		],
		{
			basename: import.meta.env.BASE_URL,
		},
	);

	return <RouterProvider router={router} />;
}

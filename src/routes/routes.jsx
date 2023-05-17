import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Main from "../layout/MainLayout/Main";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [{}],
	},
]);

export default router;

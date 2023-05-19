import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Main from "../layout/MainLayout/Main";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import SingleToyDetail from "../pages/SingleToyDetail/SingleToyDetail";
import UpdateToy from "../pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/allToys",
				element: <AllToys></AllToys>,
			},
			{
				path: "/toy/:id",
				element: <SingleToyDetail></SingleToyDetail>,
				loader: ({ params }) => fetch(`https://toy-marketplace-server-amber.vercel.app/toy/${params.id}`),
			},
			{
				path: "/myToys",
				element: <MyToys></MyToys>,
			},
			{
				path: "/addAToy",
				element: <AddAToy></AddAToy>,
			},
			{
				path: "/update/:id",
				element: <UpdateToy></UpdateToy>,
				loader: ({ params }) => fetch(`https://toy-marketplace-server-amber.vercel.app/toy/${params.id}`),
			},
			{
				path: "/blogs",
				element: <Blog></Blog>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
		],
	},
]);

export default router;

import { Link, useRouteError } from "react-router-dom";

import ErrorPic from "../../../assets/Errorpic.avif";

const ErrorPage = () => {
	useRouteError();
	return (
		<section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
			<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
				<img className="h-96" src={ErrorPic} alt="404 Page"></img>
				<div className="text-center">
					<Link to="/" className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900">
						Back to homepage
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;

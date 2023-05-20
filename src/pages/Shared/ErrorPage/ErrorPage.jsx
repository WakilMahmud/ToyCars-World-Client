import { Link, useRouteError } from "react-router-dom";

import ErrorPic from "../../../assets/Errorpic.avif";

const ErrorPage = () => {
	useRouteError();
	return (
		<section className="flex items-center h-screen">
			<div className="container flex flex-col items-center justify-center space-y-4">
				<img className="h-96" src={ErrorPic} alt="404 Page"></img>
				<div className="text-center">
					<Link to="/">
						<button className="btn btn-outline btn-info">Back to Home</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;

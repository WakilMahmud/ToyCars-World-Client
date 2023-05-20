import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const ToyCategory = ({ toy }) => {
	// console.log(toy);
	const { _id, toy_picture, toy_name, price, rating } = toy;

	const { user } = useContext(AuthContext);

	const handleViewDetails = () => {
		if (!user) {
			Swal.fire({
				title: "You have to log in first to view details",
			});
		}
	};

	return (
		<>
			<div className="card bg-base-100 shadow-xl">
				<figure>
					<img src={toy_picture} alt="Toy Picture" className="h-40 mt-5 rounded-lg" />
				</figure>
				<div className="flex flex-col justify-center items-center space-y-4 mt-8">
					<h2 className="card-title">{toy_name}</h2>
					<p className="font-semibold text-gray-500">
						Price: <span className="text-red-500">${price}</span>
					</p>
					<p className="font-semibold text-gray-500">
						Rating: <span className="text-blue-500 text-xl">{rating}</span>
					</p>
					<div className="card-actions pb-8">
						{/* {user ? (
							<Link to={`/toy/${_id}`}>
								<button className="btn btn-primary" onClick={handleViewDetails}>
									View Details
								</button>
							</Link>
						) : (
							<button className="btn btn-primary" onClick={handleViewDetails}>
								View Details
							</button>
						)} */}

						<Link to={`/toy/${_id}`}>
							<button className="btn btn-primary" onClick={handleViewDetails}>
								View Details
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default ToyCategory;

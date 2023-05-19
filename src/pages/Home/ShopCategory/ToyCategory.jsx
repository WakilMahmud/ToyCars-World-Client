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
			<div className="card card-compact bg-base-100 shadow-xl">
				<figure>
					<img src={toy_picture} alt="Toy Picture" className="h-40 mt-5" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{toy_name}</h2>
					<p>Price: {price}</p>
					<p>Rating: {rating}</p>
					<div className="card-actions justify-center">
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

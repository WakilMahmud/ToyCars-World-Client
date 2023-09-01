import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

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
			<div className="card shadow-xl">
				<figure>
					<img src={toy_picture} alt="Toy Picture" className="h-72 w-full rounded-lg rounded-b-none border object-cover object-center" />
				</figure>
				<div className="flex justify-between mt-6 px-6">
					<h2 className="card-title">{toy_name}</h2>
					<p className="font-semibold">
						<span className="text-red-500">${price}</span>
					</p>
				</div>
				<div className="flex  items-center gap-2 my-2 mb-4 px-6">
					<Rating style={{ maxWidth: 180 }} value={Math.round(rating)} readOnly />
					<h1 className="text-sky-500  font-bold">{rating}</h1>
				</div>
				<div className="pb-8 w-full">
					<Link to={`/toy/${_id}`}>
						<button className="btn btn-info w-11/12" onClick={handleViewDetails}>
							View Details
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ToyCategory;

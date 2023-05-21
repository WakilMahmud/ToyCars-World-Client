import { useLoaderData } from "react-router-dom";

const SingleToyDetail = () => {
	const singleData = useLoaderData();
	// console.log(singleData);

	const { toy_picture, toy_name, seller_name, seller_email, sub_category, price, rating, available_quantity, detail_description } = singleData;

	return (
		<div className="card my-32">
			<figure className="w-full lg:w-1/2 h-96 mx-auto">
				<img className="h-full object-cover" src={toy_picture} alt="Toy Picture" />
			</figure>
			<div className="card-body text-lg">
				<h2 className="card-title">
					<span className="font-semibold text-gray-500">Toy Name: </span>
					{toy_name}
				</h2>
				<p className="font-semibold text-gray-500">
					Seller Name: <span className="font-normal text-gray-950">{seller_name}</span>
				</p>
				<p className="font-semibold text-gray-500">
					Seller Email: <span className="font-normal text-gray-950">{seller_email}</span>
				</p>
				<p className="font-semibold text-gray-500">
					Sub Category: <span className="font-normal text-gray-950">{sub_category}</span>
				</p>

				<p className="font-semibold text-gray-500">
					Price: <span className="text-red-500">${price}</span>
				</p>
				<p className="font-semibold text-gray-500">
					Rating: <span className="text-blue-500 text-xl">{rating}</span>
				</p>
				<p className="font-semibold text-gray-500">
					Available Quantity: <span className="font-bold text-orange-500">{available_quantity}</span>
				</p>
				<p className="font-semibold text-gray-500">
					Description: <span className="font-thin text-gray-950">{detail_description}</span>
				</p>
			</div>
		</div>
	);
};

export default SingleToyDetail;

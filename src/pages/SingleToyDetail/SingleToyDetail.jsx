import { useLoaderData } from "react-router-dom";

const SingleToyDetail = () => {
	const singleData = useLoaderData();
	// console.log(singleData);

	const { toy_picture, toy_name, seller_name, seller_email, sub_category, price, rating, available_quantity, detail_description } = singleData;

	return (
		<div className="card card-side bg-base-100 shadow-xl">
			<figure>
				<img src={toy_picture} alt="Toy Picture" />
			</figure>
			<div className="card-body">
				<p>Toy Name: {toy_name}</p>
				<p>Seller Name: {seller_name}</p>
				<p>Seller Email: {seller_email}</p>
				<p>Sub Category: {sub_category}</p>
				<p>Price: {price}</p>
				<p>Rating: {rating}</p>
				<p>Available Quantity: {available_quantity}</p>
				<p>Description: {detail_description}</p>
			</div>
		</div>
	);
};

export default SingleToyDetail;

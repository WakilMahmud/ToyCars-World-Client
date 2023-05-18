import { useEffect, useState } from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";

const AllToys = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://toy-marketplace-server-amber.vercel.app/toys/")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setData(data);
			});
	}, []);

	// const { _id, seller_name, toy_name, sub_category, price, available_quantity } = data;

	return (
		<div>
			<PageTitle title="Toy Cars | All Toys"></PageTitle>
			<div className="overflow-x-auto my-32 ">
				<table className="table table-compact w-full">
					<thead>
						<tr>
							<th>Seller Name</th>
							<th>Toy Name</th>
							<th>Sub-Category</th>
							<th>Price</th>
							<th>Available Quantity</th>
						</tr>
					</thead>
					<tbody>
						{data.map((toy) => {
							return (
								<tr key={toy._id}>
									<td>{toy.seller_name}</td>
									<td>{toy.toy_name}</td>
									<td>{toy.sub_category}</td>
									<td>${toy.price}</td>
									<td className="flex flex-row justify-around">
										<span>{toy.available_quantity}</span>
										<button className="btn btn-info">View Details</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllToys;

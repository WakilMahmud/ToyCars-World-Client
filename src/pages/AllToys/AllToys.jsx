import { useEffect, useState } from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { Link } from "react-router-dom";

const AllToys = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://toy-marketplace-server-amber.vercel.app/toys/")
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setData(data);
			});
	}, []);

	return (
		<div>
			<PageTitle title="Toy Cars | All Toys"></PageTitle>
			<button className="btn btn-outline btn-accent">Search</button>
			<div className="overflow-x-auto my-32 ">
				<table className="table table-compact w-full">
					<thead>
						<tr>
							<th>Index</th>
							<th>Seller Name</th>
							<th>Toy Name</th>
							<th>Sub-Category</th>
							<th>Price</th>
							<th>Available Quantity</th>
						</tr>
					</thead>
					<tbody>
						{data.map((toy, index) => {
							return (
								<tr key={toy._id}>
									<td>{index + 1}</td>
									<td>{toy.seller_name}</td>
									<td>{toy.toy_name}</td>
									<td>{toy.sub_category}</td>
									<td>${toy.price}</td>
									<td className="flex flex-row justify-around">
										{toy.available_quantity}

										<Link to={`/toy/${toy._id}`}>
											<button className="btn btn-outline">View Details</button>
										</Link>
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

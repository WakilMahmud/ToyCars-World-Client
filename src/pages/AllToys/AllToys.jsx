import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { Link } from "react-router-dom";

const AllToys = () => {
	const [data, setData] = useState([]);

	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (toyData) => {
		console.log(toyData);
		reset();
	};

	useEffect(() => {
		fetch("https://toy-marketplace-server-amber.vercel.app/allToys")
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setData(data);
			});
	}, []);

	return (
		<div>
			<PageTitle title="Toy Cars | All Toys"></PageTitle>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input placeholder="Toy Name" className="border rounded p-2 mr-2" {...register("toy_name")} />
				<input className="btn btn-info" type="submit" value="Search" />
			</form>

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
								<tr key={toy?._id}>
									<td>{index + 1}</td>
									<td>{toy?.seller_name || ""}</td>
									<td>{toy?.toy_name || ""}</td>
									<td>{toy?.sub_category || "Uncategorized"}</td>
									<td>${toy?.price || 0}</td>
									<td className="flex flex-row justify-around items-center">
										{toy?.available_quantity || 0}

										<Link to={`/toy/${toy?._id}`}>
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

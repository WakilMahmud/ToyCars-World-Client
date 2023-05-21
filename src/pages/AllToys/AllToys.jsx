import { useForm } from "react-hook-form";
import { useState } from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Spinner from "../Shared/Spinner/Spinner";

const AllToys = () => {
	const navigation = useNavigation();

	if (navigation.state === "loading") {
		console.log("Loading in All Toys Page");
		return <Spinner></Spinner>;
	}

	const initialData = useLoaderData();
	const [data, setData] = useState(initialData);

	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (toy) => {
		const search = toy.toy_name;

		fetch(`https://toy-marketplace-server-amber.vercel.app/allToys/${search}`)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
		reset();
	};

	return (
		<div>
			<PageTitle title="ToyCars World | All Toys"></PageTitle>
			<form onSubmit={handleSubmit(onSubmit)} className="flex justify-end mt-32">
				<input placeholder="Toy Name" className="border rounded p-2 mr-2" {...register("toy_name")} />
				<input className="btn btn-info" type="submit" value="Search" />
			</form>

			{data.length > 0 && (
				<div className="overflow-x-auto mt-4 mb-32 ">
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
							{data?.map((toy, index) => {
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
												<button className="btn btn-outline btn-info">View Details</button>
											</Link>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			)}

			{data.length == 0 && <p className="text-red-500 text-3xl font-bold text-center mb-32">NO TOY FOUND</p>}
		</div>
	);
};

export default AllToys;

import { useContext, useEffect, useState } from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./MyToys.css";

const MyToys = () => {
	const [sortingState, setSortingState] = useState("ascending");
	const [myToys, setMyToys] = useState([]);
	const { user } = useContext(AuthContext);
	const [isDeleted, setIsDeleted] = useState(false);

	useEffect(() => {
		fetch(`https://toy-marketplace-server-amber.vercel.app/toys?email=${user?.email}&sorting=${sortingState}`)
			.then((res) => res.json())
			.then((data) => setMyToys(data));
	}, [user, isDeleted, sortingState]);

	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://toy-marketplace-server-amber.vercel.app/toy/${id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((resultData) => {
						if (resultData.deletedCount > 0) {
							Swal.fire("Deleted!", "Your file has been deleted.", "success");
							setIsDeleted(!isDeleted);
						}
					});
			}
		});
	};

	return (
		<div>
			<PageTitle title="Toy Cars | My Toys"></PageTitle>
			<div className="mt-20 mb-8 flex gap-4 justify-center">
				<button className="btn btn-outline btn-accent" onClick={() => setSortingState("ascending")}>
					Ascending
				</button>
				<button className="btn btn-outline btn-accent" onClick={() => setSortingState("descending")}>
					Descending
				</button>
			</div>
			<div className="overflow-x-auto mb-32 max-w-fit mx-auto">
				<table className="table">
					<thead>
						<tr>
							<th className="text-base">Index</th>
							<th className="text-base">Toy Name</th>
							<th className="text-base">Sub-Category</th>
							<th className="text-base">Price</th>
						</tr>
					</thead>
					<tbody>
						{myToys?.map((toy, index) => {
							return (
								<tr key={toy?._id}>
									<td>{index + 1}</td>
									<td>{toy?.toy_name}</td>
									<td>{toy?.sub_category}</td>
									<td className="flex gap-2 items-center">
										<p className="w-16">${toy?.price}</p>
										<Link to={`/update/${toy?._id}`}>
											<button className="btn btn-outline mx-2">Update</button>
										</Link>
										<button className="btn btn-outline" onClick={() => handleDelete(toy?._id)}>
											Delete
										</button>
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

export default MyToys;

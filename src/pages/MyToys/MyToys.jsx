import { useContext, useEffect, useState } from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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
			<button className="btn btn-outline btn-accent" onClick={() => setSortingState("ascending")}>
				Ascending
			</button>
			<button className="btn btn-outline btn-accent" onClick={() => setSortingState("descending")}>
				Descending
			</button>
			<div className="overflow-x-auto my-32 ">
				<table className="table table-compact w-full">
					<thead>
						<tr>
							<th>Index</th>
							<th>Toy Name</th>
							<th>Sub-Category</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{myToys?.map((toy, index) => {
							return (
								<tr key={toy._id}>
									<td>{index + 1}</td>
									<td>{toy.toy_name}</td>
									<td>{toy.sub_category}</td>
									<td>
										${toy.price}
										<Link to={`/update/${toy._id}`}>
											<button className="btn btn-outline mx-2">Update</button>
										</Link>
										<button className="btn btn-outline" onClick={() => handleDelete(toy._id)}>
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

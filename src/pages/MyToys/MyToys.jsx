import { useContext, useEffect, useState } from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyToys = () => {
	const [myToys, setMyToys] = useState([]);
	const { user } = useContext(AuthContext);

	useEffect(() => {
		fetch(`https://toy-marketplace-server-amber.vercel.app/toys/${user?.email}`)
			.then((res) => res.json())
			.then((data) => setMyToys(data));
	}, []);

	const handleDelete = (id) => {
		console.log(id);
	};
	return (
		<div>
			<PageTitle title="Toy Cars | My Toys"></PageTitle>
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

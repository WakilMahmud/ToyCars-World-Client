import { useForm } from "react-hook-form";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddAToy = () => {
	const { user } = useContext(AuthContext);

	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (toyData) => {
		// console.log(toyData);

		fetch("https://toy-marketplace-server-amber.vercel.app/toy", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(toyData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					Swal.fire({
						icon: "success",
						title: "Toy is Added",
						showConfirmButton: false,
						timer: 1500,
					});

					reset();
				}
			});
	};

	return (
		<div>
			<PageTitle title="ToyCars World | Add A Toy"></PageTitle>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full lg:w-3/5 bg-gray-900 mx-auto my-32 space-y-4 border p-16 rounded-lg">
				<input type="text" placeholder="Picture URL of the Toy" className="border rounded p-2" {...register("toy_picture")} />
				<input placeholder="Toy Name" className="border rounded p-2" {...register("toy_name")} />
				<input defaultValue={user?.displayName} className="border rounded p-2" {...register("seller_name")} />
				<input defaultValue={user?.email} className="border rounded p-2" {...register("seller_email")} />
				<select className="border rounded p-2" {...register("sub_category")}>
					<option value="Sports Car">Sports Car</option>
					<option value="Regular Car">Regular Car</option>
					<option value="Truck">Truck</option>
				</select>

				<input placeholder="Price" className="border rounded p-2" {...register("price")} />
				<input placeholder="Rating" className="border rounded p-2" {...register("rating")} />
				<input placeholder="Available Quantity" className="border rounded p-2" {...register("available_quantity")} />
				<input placeholder="Detail Description" className="border rounded p-2" {...register("detail_description")} />

				<input className="btn btn-info" type="submit" value="Add Toy" />
			</form>
		</div>
	);
};

export default AddAToy;

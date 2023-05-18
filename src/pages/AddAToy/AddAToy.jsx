import { useForm } from "react-hook-form";
import PageTitle from "../Shared/PageTitle/PageTitle";

const AddAToy = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<div>
			<PageTitle title="Toy Cars | Add A Toy"></PageTitle>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/2 mx-auto my-32 space-y-4">
				<input type="text" placeholder="Picture URL of the toy" className="border rounded p-2" {...register("toy_picture")} />
				<input placeholder="Toy Name" className="border rounded p-2" {...register("toy_name")} />
				<input defaultValue="seller name" className="border rounded p-2" {...register("seller_name")} />
				<input defaultValue="seller email" className="border rounded p-2" {...register("seller_email")} />
				<select className="border rounded p-2" {...register("sub_category")}>
					<option disabled selected value="">
						Sub category
					</option>
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

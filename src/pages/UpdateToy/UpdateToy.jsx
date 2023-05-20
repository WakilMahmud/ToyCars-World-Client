import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateToy = () => {
	const toyData = useLoaderData();
	const { _id, toy_name } = toyData;

	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		// console.log(data);

		Swal.fire({
			title: "Do you want to save the changes?",
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: "Save",
			denyButtonText: `Don't save`,
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				fetch(`https://toy-marketplace-server-amber.vercel.app/toy/${_id}`, {
					method: "PATCH",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(data),
				})
					.then((res) => res.json())
					.then((resultData) => {
						if (resultData.matchedCount > 0) {
							Swal.fire("Saved!", "", "success");
							reset();
						}
					});
			} else if (result.isDenied) {
				Swal.fire("Changes are not saved", "", "info");
			}
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/2 mx-auto my-32 space-y-4">
			{/* register your input into the hook by invoking the "register" function */}

			<input defaultValue={toy_name} className="border rounded p-2" />

			<input placeholder="Price" {...register("price")} className="border rounded p-2" />
			<input placeholder="Available Quantity" {...register("available_quantity")} className="border rounded p-2" />
			<input placeholder="Detail Description" {...register("detail_description")} className="border rounded p-2" />
			<input className="btn btn-info" type="submit" value="UPDATE" />
		</form>
	);
};

export default UpdateToy;

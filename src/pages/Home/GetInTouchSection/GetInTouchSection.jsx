import { useForm } from "react-hook-form";

const GetInTouchSection = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log("Form data submitted:", data);
		reset();
	};

	return (
		<section className="get-in-touch-section py-12 bg-black">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div className="md:w-1/2  text-white">
						<h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
						<p className="mb-6">Have questions or need assistance? Contact us!</p>
						<p className="text-lg">Email: info@toycarsworld.com</p>
						<p className="text-lg">Phone: +1 (123) 456-7890</p>
						<p className="text-lg">Address: 123 Toy Street, Toy Town</p>
					</div>
					<div className="w-full md:w-1/2 mt-6 md:mt-0">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="mb-4">
								<input
									type="text"
									placeholder="Your Name"
									className="w-full p-2 rounded border outline-none"
									{...register("name", { required: true })}
								/>
								{errors.name && <p className="text-red-500">{errors.name.message}</p>}
							</div>
							<div className="mb-4">
								<input
									type="email"
									placeholder="Your Email"
									className="w-full p-2 rounded border outline-none"
									{...register("email", { required: true })}
								/>
								{errors.email && <p className="text-red-500">{errors.email.message}</p>}
							</div>
							<div className="mb-4">
								<textarea
									name="message"
									placeholder="Your Message"
									rows="4"
									className="w-full p-2 rounded border outline-none"
									{...register("message")}
								/>
								{errors.message && <p className="text-red-500">{errors.message.message}</p>}
							</div>
							<div className="text-center">
								<button type="submit" className="text-black bg-sky-200  hover:bg-sky-500 text-lg font-semibold py-2 px-4 rounded  ">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GetInTouchSection;

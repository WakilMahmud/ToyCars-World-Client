import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/4 mx-auto my-32 space-y-4">
				{/* register your input into the hook by invoking the "register" function */}
				<input defaultValue="email" placeholder="Enter your email" className="border rounded p-2" {...register("email")} />
				<input defaultValue="password" placeholder="Enter your password" className="border rounded p-2" {...register("password")} />
				{/* errors will return when field validation fails  */}
				{errors.exampleRequired && <span>This field is required</span>}
				<input className="btn btn-info" type="submit" value="Register" />

				<p>
					Already have an account?
					<Link to="/login">
						<button className="btn btn-active btn-link">Login</button>
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Register;

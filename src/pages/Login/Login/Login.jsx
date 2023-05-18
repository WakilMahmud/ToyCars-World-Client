import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
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
				<input className="btn btn-info" type="submit" value="Login" />

				<p>
					New User?
					<Link to="/register">
						<button className="btn btn-active btn-link">Register</button>
					</Link>
				</p>

				<button className="btn btn-warning">Sign in with Google</button>
			</form>
		</div>
	);
};

export default Login;

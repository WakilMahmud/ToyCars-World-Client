import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Register = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<div>
			<PageTitle title="Toy Cars | Register"></PageTitle>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/4 mx-auto my-32 space-y-4">
				{/* register your input into the hook by invoking the "register" function */}
				<input placeholder="Enter your name" className="border rounded p-2" {...register("name")} />
				<input type="email" placeholder="Enter your email" className="border rounded p-2" {...register("email")} />

				<input type="password" placeholder="Enter your password" className="border rounded p-2" {...register("password")} />

				<input placeholder="Photo URL" className="border rounded p-2" {...register("photo")} />

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

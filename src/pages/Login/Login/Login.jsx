import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
	const { signIn, googleLogin } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		// console.log(data);

		signIn(data.email, data.password)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
				navigate(from, { replace: true });
			})
			.catch((error) => {
				// console.log(error);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: error.message,
				});
			});
	};

	const handleGoogleLogin = () => {
		// console.log("Clicked Google");
		googleLogin()
			.then((result) => {
				// The signed-in user info.
				const user = result.user;
				console.log(user);
				navigate(from, { replace: true });
			})
			.catch((error) => {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: error.message,
				});
			});
	};

	return (
		<>
			<PageTitle title="Toy Cars | Login"></PageTitle>
			<div className="flex flex-col justify-center items-center my-32">
				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/4 mx-auto  space-y-4">
					<input type="email" placeholder="Enter your email" className="border rounded p-2" {...register("email")} required />
					<input type="password" placeholder="Enter your password" className="border rounded p-2" {...register("password")} required />

					<input className="btn btn-info" type="submit" value="Login" />

					<p>
						New User?
						<Link to="/register">
							<button className="btn btn-active btn-link">Register</button>
						</Link>
					</p>
				</form>
				<button className="btn btn-warning w-1/4" onClick={handleGoogleLogin}>
					Sign in with Google
				</button>
			</div>
		</>
	);
};

export default Login;

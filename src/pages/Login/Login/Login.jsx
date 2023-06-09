import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import login from "../../../assets/login.png";
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
			<PageTitle title="ToyCars World | Login"></PageTitle>

			<div className="flex flex-col lg:flex-row gap-4 my-32">
				<div className="flex flex-col justify-center items-center my-32 w-full lg:w-2/5 border py-10 rounded order-2">
					<h1 className="text-3xl font-extrabold mb-8">Login</h1>
					<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-3/4 mx-auto  space-y-4">
						<input type="email" placeholder="Enter your email" className="border rounded p-2" {...register("email")} required />
						<input type="password" placeholder="Enter your password" className="border rounded p-2" {...register("password")} required />

						<input className="btn btn-info rounded-full" type="submit" value="Login" />

						<p>
							New User?
							<Link to="/register">
								<button className="btn btn-active btn-link">Register</button>
							</Link>
						</p>
					</form>
					<div className="divider w-full ">OR</div>
					<button className="btn btn-warning w-3/4 rounded-full" onClick={handleGoogleLogin}>
						Sign in with Google
					</button>
				</div>
				<div className="w-full lg:w-1/2 order-1">
					<img className="w-full" src={login} alt="Login Image" />
				</div>
			</div>
		</>
	);
};

export default Login;

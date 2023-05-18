import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { getAuth, updateProfile } from "firebase/auth";

const auth = getAuth();

const Register = () => {
	const { createUser, logOut } = useContext(AuthContext);
	const [passwordError, setPasswordError] = useState("");

	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		// console.log(data);

		if (data.password.length < 6) {
			setPasswordError("Password must be at least 6 characters");
			return;
		}

		createUser(data.email, data.password)
			.then((result) => {
				const createdUser = result.user;
				console.log(createdUser);
				Swal.fire({
					icon: "success",
					title: "Successfully Registered!",
					showConfirmButton: false,
					timer: 1500,
				});

				logOut();

				updateProfile(auth.currentUser, {
					displayName: data.name,
					photoURL: data.photo,
				})
					.then(() => {
						// console.log("Profile updated");
					})
					.catch((error) => {
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: error.message,
						});
					});

				setPasswordError("");
				reset();
			})
			.catch((error) => {
				console.log(error);

				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Email is already in use!",
				});
			});
	};
	return (
		<div>
			<PageTitle title="Toy Cars | Register"></PageTitle>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/4 mx-auto my-32 space-y-4">
				{/* register your input into the hook by invoking the "register" function */}
				<input placeholder="Enter your name" className="border rounded p-2" {...register("name")} />
				<input type="email" placeholder="Enter your email" className="border rounded p-2" {...register("email")} required />

				<input type="password" placeholder="Enter your password" className="border rounded p-2" {...register("password")} required />
				{passwordError && <small className="text-red-500">{passwordError}</small>}
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

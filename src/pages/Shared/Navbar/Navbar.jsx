import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogout = () => {
		logOut()
			.then()
			.catch((error) => console.log(error));
	};

	return (
		<div className="navbar  bg-red-400">
			{/* Responsive Navbar */}
			<div className="flex-1 md:hidden">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost btn-circle">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</label>
					<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/allToys">All Toys</Link>
						</li>
						<li>
							<Link to="/myToys">My Toys</Link>
						</li>
						<li>
							<Link to="/addAToy">Add A Toy</Link>
						</li>
						<li>
							<Link to="/blogs">Blogs</Link>
						</li>

						{!user ? (
							<Link to="/login">
								<button className="btn btn-info">Login</button>
							</Link>
						) : (
							<button className="btn btn-info" onClick={handleLogout}>
								Logout
							</button>
						)}
					</ul>
				</div>
			</div>

			<div className="w-full flex justify-around">
				<div className="navbar-start w-auto flex items-center">
					<Link to="/">
						<img
							className="h-8 w-8 rounded-full"
							src="data:image/png;base64,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"
							alt="Logo"
						/>
					</Link>
					<Link to="/" className="btn btn-ghost normal-case text-xl">
						Toy Cars
					</Link>
				</div>
				<div className="navbar-center hidden lg:block">
					<ul className="flex flex-row menu menu-compact mt-3 p-2   rounded-box">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/allToys">All Toys</Link>
						</li>
						<li>
							<Link to="/myToys">My Toys</Link>
						</li>
						<li>
							<Link to="/addAToy">Add A Toy</Link>
						</li>
						<li>
							<Link to="/blogs">Blogs</Link>
						</li>

						{!user ? (
							<Link to="/login">
								<button className="btn btn-info">Login</button>
							</Link>
						) : (
							<button className="btn btn-info" onClick={handleLogout}>
								Logout
							</button>
						)}
					</ul>
				</div>

				<div className="navbar-end w-auto">
					<div className="flex-none">
						<div className="dropdown dropdown-end">
							<label className="btn btn-ghost btn-circle avatar">
								{user && (
									<div className="tooltip tooltip-bottom tooltip-primary" data-tip={user?.displayName}>
										<button>
											<img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="User Profile" />
										</button>
									</div>
								)}
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

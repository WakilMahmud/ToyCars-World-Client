import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import logo from "../../../assets/logo.png";
const Navbar = () => {
	const [click, setClick] = useState(false);
	const [show, setShow] = useState(false);
	const { user, logOut } = useContext(AuthContext);

	const handleLogout = () => {
		logOut()
			.then()
			.catch((error) => console.log(error));
	};

	return (
		<div className="navbar sticky top-0 z-10 bg-white font-bold shadow-sm">
			{/* Responsive Navbar */}
			<div className="flex-1 md:hidden">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost btn-circle" onClick={() => setClick(!click)}>
						<svg fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className={`menu menu-compact dropdown-content mt-3 gap-2 p-2 shadow bg-base-100 rounded-box w-52 ${click ? "hidden" : "block"}`}
					>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/allToys">All Toys</Link>
						</li>
						{user && (
							<>
								<li>
									<Link to="/myToys">My Toys</Link>
								</li>
								<li>
									<Link to="/addAToy">Add A Toy</Link>
								</li>
							</>
						)}
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
						<img className="h-12 w-12 rounded-full" src={logo} alt="Logo" />
					</Link>

					<Link to="/" className="btn btn-ghost normal-case text-2xl font-extrabold">
						ToyCars World
					</Link>
				</div>
				<div className="navbar-center hidden lg:block">
					<ul className="flex flex-row menu  mt-3 p-2 gap-2 rounded-box">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/allToys">All Toys</Link>
						</li>
						{user && (
							<>
								<li>
									<Link to="/myToys">My Toys</Link>
								</li>
								<li>
									<Link to="/addAToy">Add A Toy</Link>
								</li>
							</>
						)}
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

				{user && (
					<div className="navbar-end w-auto" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
						<label className="btn btn-ghost btn-circle avatar">
							{user && <img className="w-10 rounded-full" src={user?.photoURL} alt="User Profile" />}
							{show && <small className="text-blue-300 relative lg:-right-11 lg:-top-8">{user?.displayName}</small>}
						</label>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;

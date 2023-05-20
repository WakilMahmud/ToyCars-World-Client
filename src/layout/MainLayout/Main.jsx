import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";
import Navbar from "../../pages/Shared/Navbar/Navbar";

const Main = () => {
	return (
		<>
			<Navbar></Navbar>
			<div className="max-w-7xl mx-auto min-h-[calc(100vh-300px)]">
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</>
	);
};

export default Main;

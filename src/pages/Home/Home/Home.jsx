import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopCategory from "../ShopCategory/ShopCategory";

const Home = () => {
	return (
		<>
			<PageTitle title="Toy Cars | Home"></PageTitle>
			<Banner></Banner>
			<Gallery></Gallery>
			<ShopCategory></ShopCategory>
			<div className="">Extra Section - 1</div>
			<div className="">Extra Section - 2</div>
		</>
	);
};

export default Home;

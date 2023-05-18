import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopCategory from "../ShopCategory/ShopCategory";
import ToyCarAccessoriesSection from "../ToyCarAccessoriesSection/ToyCarAccessoriesSection";
import ToyCarRacingEventsSection from "../ToyCarRacingEvent/ToyCarRacingEventsSection";

const Home = () => {
	return (
		<>
			<PageTitle title="Toy Cars | Home"></PageTitle>
			<Banner></Banner>
			<Gallery></Gallery>
			<ShopCategory></ShopCategory>
			<ToyCarAccessoriesSection></ToyCarAccessoriesSection>
			<ToyCarRacingEventsSection></ToyCarRacingEventsSection>
		</>
	);
};

export default Home;

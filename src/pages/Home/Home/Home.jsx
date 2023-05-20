import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopCategory from "../ShopCategory/ShopCategory";
import Faq from "../Faq/Faq";
import ToyCarRacingEventsSection from "../ToyCarRacingEvent/ToyCarRacingEventsSection";

const Home = () => {
	return (
		<>
			<PageTitle title="Toy Cars | Home"></PageTitle>
			<Banner></Banner>
			<Gallery></Gallery>
			<ShopCategory></ShopCategory>
			<ToyCarRacingEventsSection></ToyCarRacingEventsSection>
			<Faq></Faq>
		</>
	);
};

export default Home;

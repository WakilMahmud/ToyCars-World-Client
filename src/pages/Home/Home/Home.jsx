import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopCategory from "../ShopCategory/ShopCategory";
import Faq from "../Faq/Faq";
import ToyCarRacingEventsSection from "../ToyCarRacingEvent/ToyCarRacingEventsSection";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import GetInTouchSection from "../GetInTouchSection/GetInTouchSection";

const Home = () => {
	return (
		<>
			<PageTitle title="ToyCars World | Home"></PageTitle>
			<Banner></Banner>
			<Gallery></Gallery>
			<ShopCategory></ShopCategory>
			<TestimonialSection></TestimonialSection>
			<ToyCarRacingEventsSection></ToyCarRacingEventsSection>
			<GetInTouchSection></GetInTouchSection>
			<Faq></Faq>
		</>
	);
};

export default Home;

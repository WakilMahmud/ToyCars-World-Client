import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopCategory from "../ShopCategory/ShopCategory";
import Faq from "../Faq/Faq";
import ToyCarRacingEventsSection from "../ToyCarRacingEvent/ToyCarRacingEventsSection";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import GetInTouchSection from "../GetInTouchSection/GetInTouchSection";
import Commitment from "../Commitment/Commitment";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
	return (
		<>
			<PageTitle title="ToyCars World | Home"></PageTitle>
			<Banner></Banner>
			<Gallery></Gallery>
			<ShopCategory></ShopCategory>
			<Commitment></Commitment>
			<TestimonialSection></TestimonialSection>
			<ToyCarRacingEventsSection></ToyCarRacingEventsSection>
			<Faq></Faq>
			<GetInTouchSection></GetInTouchSection>
			<Subscribe></Subscribe>
		</>
	);
};

export default Home;

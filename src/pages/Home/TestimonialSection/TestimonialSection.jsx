import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialData = [
	{
		id: 1,
		name: "John Doe",
		text: "I was amazed by the quality and variety of toy cars available on ToyCars World. My kids love them!",
		company: "Facebook",
		image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=2000",
	},
	{
		id: 2,
		name: "Jane Smith",
		text: "The customer service at ToyCars World is top-notch. They helped me find the perfect gift for my nephew.",
		company: "Satisfied Shopper",
		image: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
	},
	{
		id: 3,
		name: "Michael Johnson",
		text: "ToyCars World has a fantastic collection of collectible toy cars. I've been a loyal customer for years.",
		company: "Netflix",
		image: "https://st3.depositphotos.com/1075946/35534/i/450/depositphotos_355345132-stock-photo-portrait-year-old-man-isolated.jpg",
	},
];

const TestimonialSection = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<section className="max-w-7xl m-auto testimonial-section my-10">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
				<Slider {...settings}>
					{testimonialData.map((testimonial) => (
						<div key={testimonial.id} className="testimonial-card py-4 bg-gray-700">
							<p className="text-lg text-gray-300 font-semibold px-2 lg:text-center ">{testimonial.text}</p>
							<div className="mt-4 flex gap-4 lg:justify-center items-center px-2">
								<div>
									<img className="h-32 w-32 rounded-full" src={testimonial.image} alt="Image" />
								</div>
								<div>
									<p className="text-xl font-semibold text-white">{testimonial.name}</p>
									<p className="text-gray-300 ">{testimonial.company}</p>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default TestimonialSection;

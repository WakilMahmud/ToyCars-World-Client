import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import faq from "../../../assets/faq.png";
AOS.init();

const Faq = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleAccordionClick = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const faqData = [
		{
			question: "What age range are the toy cars suitable for?",
			answer:
				"Our toy cars are designed for children ages 3 and above. However, some models may have specific age recommendations indicated on their product descriptions. Please refer to the individual product pages for more information.",
		},
		{
			question: "Are the toy cars safe for children?",
			answer:
				"Yes, safety is our top priority. Our toy cars are made from non-toxic materials and undergo rigorous testing to meet safety standards. However, we always recommend adult supervision during play to ensure a safe and enjoyable experience.",
		},
		{
			question: "Do the toy cars require batteries?",
			answer:
				"The majority of our toy cars do not require batteries. They are manually operated and can be pushed or pulled for motion. However, please check the product details for specific models as some may have additional features that require batteries.",
		},
		{
			question: "Can I track my order?",
			answer:
				"Yes, once your order is confirmed and shipped, we will provide you with a tracking number. You can use this tracking number to monitor the progress of your shipment. Simply enter the tracking number on our website or the designated courier's website.",
		},
		{
			question: "What is your return policy?",
			answer:
				"We accept returns within 30 days of purchase, provided the toy car is unused, in its original packaging, and accompanied by proof of purchase. Please refer to our Return Policy page for detailed instructions on how to initiate a return.",
		},
		{
			question: "What is your return policy?",
			answer:
				"We accept returns within 30 days of purchase, provided the toy car is unused, in its original packaging, and accompanied by proof of purchase. Please refer to our Return Policy page for detailed instructions on how to initiate a return.",
		},
		{
			question: "How can I contact customer support?",
			answer:
				"For any inquiries or assistance, our customer support team is available to help. You can reach us through our Contact Us page, where you'll find our email address and contact form. We strive to respond to all inquiries promptly.",
		},
	];
	return (
		<div className="my-32 bg-white">
			<h1 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h1>
			<div className="flex flex-col lg:flex-row lg:gap-4" data-aos="zoom-in-left">
				<div className="w-full lg:w-1/2 order-2 lg:order-1">
					{faqData.map((faq, index) => (
						<div key={index} className="mb-4 px-2">
							<button
								className="flex justify-between items-center w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-sm"
								onClick={() => handleAccordionClick(index)}
							>
								<span className="font-semibold">{faq.question}</span>
								<svg
									className={`w-4 h-4 transition-transform duration-300 ${activeIndex === index ? "transform rotate-180" : ""}`}
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<polyline points="6 9 12 15 18 9" />
								</svg>
							</button>
							{activeIndex === index && (
								<div className="px-4 py-2  bg-gray-100">
									<p className="text-gray-800 text-justify">{faq.answer}</p>
								</div>
							)}
						</div>
					))}
				</div>
				<div className="w-full lg:w-1/2 order-1 lg:order-2">
					<img className="w-full" src={faq} alt="Frequently Asked Questions" />
				</div>
			</div>
		</div>
	);
};

export default Faq;

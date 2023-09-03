import { useState } from "react";

const Subscribe = () => {
	const [email, setEmail] = useState("");
	const [subscribed, setSubscribed] = useState(false);

	const handleSubscribe = () => {
		// Implement your subscribe logic here, such as sending the email to a server.
		// For this example, we'll simply toggle the subscribed state.
		setSubscribed(true);
	};

	return (
		<section className="bg-blue-100 py-12">
			<div className="container mx-auto px-4">
				<div className="text-center">
					<h2 className="text-3xl lg:text-4xl font-semibold mb-4">Subscribe For Offer !</h2>
					<p className="text-gray-700 text-lg mb-8">Stay updated with the latest news, offers, and product releases.</p>
				</div>
				{subscribed ? (
					<div className="text-center">
						<p className="text-green-500 text-xl font-semibold mb-2">Thank you for subscribing!</p>
						<p className="text-gray-700">You&apos;ll receive our latest updates and offers in your inbox.</p>
					</div>
				) : (
					<div className="flex items-center justify-center">
						<input
							type="email"
							placeholder="Enter your email"
							className="py-2 px-4 rounded-l-lg border outline-none"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<button onClick={handleSubscribe} className="bg-blue-500 text-white py-2 px-4 rounded-r-lg hover:bg-blue-600 focus:outline-none">
							Subscribe
						</button>
					</div>
				)}
			</div>
		</section>
	);
};

export default Subscribe;

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const ToyCarAccessoriesSection = () => {
	return (
		<section className="bg-gray-100 py-8" data-aos="fade-up">
			<div className="container mx-auto">
				<h2 className="text-3xl text-center font-bold mb-4">Toy Car Accessories</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Accessory 1 */}

					<div className="bg-white rounded-lg shadow-md p-6">
						<h3 className="text-xl font-semibold mb-2">Race Track Set</h3>
						<p className="text-gray-700 mb-4">Price: $39.99</p>
						<p className="text-gray-700 mb-4">
							Description: Create your own thrilling race track with this set. It includes loops, curves, and a finish line for ultimate racing
							excitement.
						</p>
						<button className="bg-blue-500 text-white py-2 px-4 rounded-md">Add to Cart</button>
					</div>

					{/* Accessory 2 */}
					<div className="bg-white rounded-lg shadow-md p-6">
						<h3 className="text-xl font-semibold mb-2">Garage Playset</h3>
						<p className="text-gray-700 mb-4">Price: $24.99</p>
						<p className="text-gray-700 mb-4">
							Description: Give your toy cars a place to park and rest with this multi-level garage playset. It features ramps, parking spots, and a
							working elevator.
						</p>
						<button className="bg-blue-500 text-white py-2 px-4 rounded-md">Add to Cart</button>
					</div>

					{/* Accessory 3 */}
					<div className="bg-white rounded-lg shadow-md p-6">
						<h3 className="text-xl font-semibold mb-2">Track Expansion Pack</h3>
						<p className="text-gray-700 mb-4">Price: $14.99</p>
						<p className="text-gray-700 mb-4">
							Description: Extend the length and variety of your toy car track with this expansion pack. It includes extra tracks, connectors, and
							accessories.
						</p>
						<button className="bg-blue-500 text-white py-2 px-4 rounded-md">Add to Cart</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ToyCarAccessoriesSection;

const ToyCarRacingEventsSection = () => {
	return (
		<section className="bg-gray-100 py-8">
			<div className="container mx-auto">
				<h2 className="text-3xl text-center font-bold mb-4">Toy Car Racing Events</h2>
				<p className="text-center text-gray-700 mb-8">Join us for exciting toy car racing events and competitions!</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Racing Event 1 */}
					<div className="bg-white rounded-lg shadow-md p-6">
						<h3 className="text-xl font-semibold mb-2">Super Speed Race</h3>
						<p className="text-gray-700 mb-4">Date: June 20, 2023</p>
						<p className="text-gray-700 mb-4">Location: Toy Car Circuit</p>
						<p className="text-gray-700">
							Description: Get ready for an adrenaline-packed race as toy car enthusiasts compete for the Super Speed Race championship. Don&apos;t
							miss out on the action!
						</p>
					</div>

					{/* Racing Event 2 */}
					<div className="bg-white rounded-lg shadow-md p-6">
						<h3 className="text-xl font-semibold mb-2">Off-Road Adventure Challenge</h3>
						<p className="text-gray-700 mb-4">Date: July 15, 2023</p>
						<p className="text-gray-700 mb-4">Location: Toy Car Off-Road Track</p>
						<p className="text-gray-700">
							Description: Test your toy car&apos;s off-road capabilities in this thrilling adventure challenge. Conquer obstacles, navigate rough
							terrains, and show off your skills!
						</p>
					</div>

					{/* Racing Event 3 */}
					<div className="bg-white rounded-lg shadow-md p-6">
						<h3 className="text-xl font-semibold mb-2">Drag Race Showdown</h3>
						<p className="text-gray-700 mb-4">Date: August 10, 2023</p>
						<p className="text-gray-700 mb-4">Location: Toy Car Drag Strip</p>
						<p className="text-gray-700">
							Description: Experience the thrill of high-speed drag racing with your favorite toy cars. Test their acceleration and compete for the
							Drag Race Showdown title!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ToyCarRacingEventsSection;

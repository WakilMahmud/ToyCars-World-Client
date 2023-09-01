import { FaRegCalendarCheck } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";

const ToyCarRacingEventsSection = () => {
	return (
		<>
			{/* <div className="max-w-7xl mx-auto  h-px bg-black"></div> */}
			<section className="max-w-7xl mx-auto py-12">
				<div className="container mx-auto mb-4">
					<h2 className="text-3xl text-center font-bold mb-4">Toy Car Racing Events</h2>
					<p className="text-center text-gray-700 text-lg mb-8">Join us for exciting toy car racing events and competitions!</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Racing Event 1 */}
						<div className="bg-gradient-to-b from-sky-200 to-white-500 rounded-lg shadow-md  mx-2">
							<h3 className="text-xl font-semibold bg-black p-2 text-center text-yellow-200 rounded-lg rounded-b-none ">Super Speed Race</h3>
							<div className="p-6">
								<p className="text-gray-700 mb-4 flex items-center gap-2">
									<FaRegCalendarCheck></FaRegCalendarCheck> June 20, 2023
								</p>
								<p className="text-gray-700 mb-4 flex items-center gap-2 ">
									<HiOutlineLocationMarker></HiOutlineLocationMarker> USA
								</p>
								<p className="text-gray-700 text-sm font-semibold ">
									Get ready for an adrenaline-packed race as toy car enthusiasts compete for the Super Speed Race championship. Don&apos;t miss out on
									the action!
								</p>
							</div>
						</div>

						{/* Racing Event 2 */}
						<div className="bg-gradient-to-b from-sky-200 to-white-500 rounded-lg shadow-md mx-2">
							<h3 className="text-xl font-semibold bg-black p-2 text-center text-yellow-200 rounded-lg rounded-b-none">
								Off-Road Adventure Challenge
							</h3>
							<div className="p-6">
								<p className="text-gray-700 mb-4 flex items-center gap-2">
									<FaRegCalendarCheck></FaRegCalendarCheck> July 15, 2023
								</p>
								<p className="text-gray-700 mb-4 flex items-center gap-2">
									<HiOutlineLocationMarker></HiOutlineLocationMarker> Canada
								</p>
								<p className="text-gray-700 text-sm font-semibold">
									Test your toy car&apos;s off-road capabilities in this thrilling adventure challenge. Conquer obstacles, navigate rough terrains,
									and show off your skills!
								</p>
							</div>
						</div>

						{/* Racing Event 3 */}
						<div className="bg-gradient-to-b from-sky-200 to-white-500 rounded-lg shadow-md mx-2">
							<h3 className="text-xl font-semibold bg-black p-2 text-center text-yellow-200 rounded-lg rounded-b-none">Drag Race Showdown</h3>
							<div className="p-6">
								<p className="text-gray-700 mb-4 flex items-center gap-2">
									<FaRegCalendarCheck></FaRegCalendarCheck> August 10, 2023
								</p>
								<p className="text-gray-700 mb-4 flex items-center gap-2">
									<HiOutlineLocationMarker></HiOutlineLocationMarker> London
								</p>
								<p className="text-gray-700 text-sm font-semibold">
									Experience the thrill of high-speed drag racing with your favorite toy cars. Test their acceleration and compete for the Drag Race
									Showdown title!
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <div className="max-w-7xl mx-auto h-px bg-black"></div> */}
		</>
	);
};

export default ToyCarRacingEventsSection;

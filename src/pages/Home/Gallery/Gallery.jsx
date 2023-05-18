const Gallery = () => {
	const toyCars = [
		{
			id: 1,
			name: "Speed Racer",
			image: "/path/to/speed-racer.jpg",
		},
		{
			id: 2,
			name: "Fire Chief",
			image: "/path/to/fire-chief.jpg",
		},
		{
			id: 3,
			name: "Monster Truck",
			image: "/path/to/monster-truck.jpg",
		},
		{
			id: 4,
			name: "Police Pursuit",
			image: "/path/to/police-pursuit.jpg",
		},
	];

	return (
		<section className="bg-gray-200 py-8">
			<div className="container mx-auto">
				<h2 className="text-3xl text-center font-bold mb-4">Toy Car Gallery</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{toyCars.map((toyCar) => (
						<div key={toyCar.id} className="bg-white rounded-lg shadow-md p-4 text-center">
							<img src={toyCar.image} alt={toyCar.name} className="w-32 mx-auto mb-4" />
							<h3 className="text-lg font-semibold">{toyCar.name}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Gallery;

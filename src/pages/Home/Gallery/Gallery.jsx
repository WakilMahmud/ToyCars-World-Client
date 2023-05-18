import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Gallery = () => {
	const toyCars = [
		{
			id: 1,
			name: "Speed Racer",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtd3vZ_ffnEn9yY3z-9Zm3-VhgNdhgBooHIQ&usqp=CAU",
		},
		{
			id: 2,
			name: "Fire Chief",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hq4pvSAp_hehAF6EpJgHm_4ttMaJnC5D9w&usqp=CAU",
		},
		{
			id: 3,
			name: "Monster Truck",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJLondmk_4UFUw5L5-Q-K5gy1dbMWWMCsCDg&usqp=CAU",
		},
		{
			id: 4,
			name: "Police Pursuit",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUL8IX3h10SFYCjkfytnXJcH2lemOiPc-8SA&usqp=CAU",
		},
	];

	return (
		<section className="bg-gray-200 py-8" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
			<div className="container mx-auto p-6">
				<h2 className="text-3xl text-center font-bold mt-4 mb-8">Toy Car Gallery</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{toyCars.map((toyCar) => (
						<div key={toyCar.id} className="bg-white rounded-lg shadow-md p-4 text-center">
							<img src={toyCar.image} alt={toyCar.name} className="w-32 h-28 mx-auto mb-4" />
							<h3 className="text-lg font-semibold">{toyCar.name}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Gallery;

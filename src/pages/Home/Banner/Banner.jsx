const Banner = () => {
	return (
		<div className="banner relative w-full my-12">
			<img
				src="https://images.squarespace-cdn.com/content/v1/5403a7d0e4b0e9cf18a425fa/1590425083131-774XGT02P3SBSZ5T9CJE/banner.2.jpg"
				alt="Toy Car Website Banner"
				className="banner-image w-full object-bottom object-cover "
			/>
			<div className="banner-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
				<h1 className="banner-title text-4xl font-bold mb-4">Welcome to Toy Car World</h1>
				<p className="banner-subtitle text-lg mb-8">Explore a world of toy cars and let your imagination run wild!</p>
				<a
					href="#"
					className="banner-button inline-block px-6 py-3 bg-orange-500 text-white rounded-md transition-colors duration-300 hover:bg-orange-600"
				>
					Shop Now
				</a>
			</div>
		</div>
	);
};

export default Banner;

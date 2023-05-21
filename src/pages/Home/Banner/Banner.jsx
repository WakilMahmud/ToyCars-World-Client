import "./Banner.css";

const Banner = () => {
	return (
		<div className="w-full  mb-12 h-96 lg:h-screen flex flex-col justify-center items-center text-center text-white lg:rounded-b-lg" id="banner-div">
			<h1 className="banner-title text-3xl lg:text-5xl font-bold mb-4">Welcome to ToyCars World</h1>
			<p className="banner-subtitle text-lg lg:text-xl mb-8">Explore a world of toy cars and let your imagination run wild!</p>
		</div>
	);
};

export default Banner;

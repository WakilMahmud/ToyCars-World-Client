import { Oval } from "react-loader-spinner";

const Spinner = () => {
	return (
		<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<Oval
				height={80}
				width={80}
				color="#000000"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
				ariaLabel="oval-loading"
				secondaryColor="#000000"
				strokeWidth={2}
				strokeWidthSecondary={2}
			/>
		</div>
	);
};

export default Spinner;

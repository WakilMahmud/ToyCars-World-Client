import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ToyCategory from "./ToyCategory";

const ShopCategory = () => {
	const [category, setCategory] = useState("Sports Car");
	const [clickSportsCar, setClickSportsCar] = useState(true);
	const [clickTruck, setClickTruck] = useState(false);
	const [clickRegularCar, setRegularCar] = useState(false);

	const [categoryData, setCategoryData] = useState([]);

	const handleTabButton = (type) => {
		setCategory(type);

		if (type === "Sports Car") {
			setClickSportsCar(!clickSportsCar);
			setClickTruck(false);
			setRegularCar(false);
		} else if (type === "Truck") {
			setClickSportsCar(false);
			setClickTruck(!clickTruck);
			setRegularCar(false);
		} else {
			setClickSportsCar(false);
			setClickTruck(false);
			setRegularCar(!clickRegularCar);
		}
	};

	useEffect(() => {
		fetch(`https://toy-marketplace-server-amber.vercel.app/shop/${category}`)
			.then((res) => res.json())
			.then((data) => {
				setCategoryData(data);
			});
	}, [category]);

	// console.log(categoryData);

	return (
		<div className="mt-20 mb-32 text-center">
			<h1 className="text-3xl font-bold ">Shop By Category</h1>
			<Tabs>
				<TabList>
					<div className="flex justify-center gap-4 px-10 pt-10 mb-7 lg:mb-0">
						<Tab>
							<button className={`btn  btn-info ${clickSportsCar ? "btn-primary" : "btn-outline"}`} onClick={() => handleTabButton("Sports Car")}>
								Sports Car
							</button>
						</Tab>
						<Tab>
							<button className={`btn  btn-info ${clickTruck ? "btn-primary" : "btn-outline"}`} onClick={() => handleTabButton("Truck")}>
								Truck
							</button>
						</Tab>
						<Tab>
							<button className={`btn  btn-info ${clickRegularCar ? "btn-primary" : "btn-outline"}`} onClick={() => handleTabButton("Regular Car")}>
								Regular Car
							</button>
						</Tab>
					</div>
				</TabList>

				<TabPanel>
					<div className="grid grid-col-1 lg:grid-cols-3 gap-4 p-0 lg:p-10">
						{categoryData.map((toy) => (
							<ToyCategory toy={toy} key={toy._id}></ToyCategory>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid grid-col-1 lg:grid-cols-3 gap-4 p-0 lg:p-10">
						{categoryData.map((toy) => (
							<ToyCategory toy={toy} key={toy._id}></ToyCategory>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid grid-col-1 lg:grid-cols-3 gap-4 p-0 lg:p-10">
						{categoryData.map((toy) => (
							<ToyCategory toy={toy} key={toy._id}></ToyCategory>
						))}
					</div>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default ShopCategory;

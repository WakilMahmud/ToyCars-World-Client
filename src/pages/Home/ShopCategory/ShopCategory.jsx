import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ToyCategory from "./ToyCategory";

const ShopCategory = () => {
	const [category, setCategory] = useState("Sports Car");

	const [categoryData, setCategoryData] = useState([]);

	const handleTabButton = (type) => {
		setCategory(type);
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
		<div className="my-32 bg-red-200">
			<Tabs>
				<TabList>
					<div className="flex gap-4 px-10 pt-10">
						<Tab>
							<button className="btn btn-outline btn-accent" onClick={() => handleTabButton("Sports Car")}>
								Sports Car
							</button>
						</Tab>
						<Tab>
							<button className="btn btn-outline btn-accent" onClick={() => handleTabButton("Truck")}>
								Truck
							</button>
						</Tab>
						<Tab>
							<button className="btn btn-outline btn-accent" onClick={() => handleTabButton("Regular Car")}>
								Regular Car
							</button>
						</Tab>
					</div>
				</TabList>

				<TabPanel>
					<div className="grid grid-cols-3 gap-4 p-10">
						{categoryData.map((toy) => (
							<ToyCategory toy={toy} key={toy._id}></ToyCategory>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid grid-cols-3 gap-4 p-10">
						{categoryData.map((toy) => (
							<ToyCategory toy={toy} key={toy._id}></ToyCategory>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid grid-cols-3 gap-4 p-10">
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

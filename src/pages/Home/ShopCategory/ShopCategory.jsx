import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ShopCategory = () => {
	const [category, setCategory] = useState("Sports Car");

	useEffect(() => {
		// fetch(`https://toy-marketplace-server-amber.vercel.app/toys/${category}`)
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		// console.log(data);
		// 		setCategory(data);
		// 	});
	}, [category]);

	return (
		<>
			<Tabs>
				<TabList>
					<Tab>
						<button className="btn btn-outline btn-accent" onClick={() => setCategory("Sports Car")}>
							Sports Car
						</button>
					</Tab>
					<Tab>
						<button className="btn btn-outline btn-accent" onClick={() => setCategory("Truck")}>
							Truck
						</button>
					</Tab>
					<Tab>
						<button className="btn btn-outline btn-accent" onClick={() => setCategory("Regular Car")}>
							Regular Car
						</button>
					</Tab>
				</TabList>

				<TabPanel>{category.length}</TabPanel>
				<TabPanel>{category.length}</TabPanel>
				<TabPanel>{category.length}</TabPanel>
			</Tabs>
		</>
	);
};

export default ShopCategory;

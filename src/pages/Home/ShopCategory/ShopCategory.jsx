import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ShopCategory = () => {
	return (
		<>
			<Tabs>
				<TabList>
					<Tab>
						<button className="btn btn-outline btn-accent">Sports Car</button>
					</Tab>
					<Tab>
						<button className="btn btn-outline btn-accent">Truck Car</button>
					</Tab>
					<Tab>
						<button className="btn btn-outline btn-accent">Regular Car</button>
					</Tab>
				</TabList>

				<TabPanel>
					<h2>Sports Car Content</h2>
				</TabPanel>
				<TabPanel>
					<h2>Truck Content</h2>
				</TabPanel>
				<TabPanel>
					<h2>Regular Car Content</h2>
				</TabPanel>
			</Tabs>
		</>
	);
};

export default ShopCategory;

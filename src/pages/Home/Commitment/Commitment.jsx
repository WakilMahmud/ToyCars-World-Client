const Commitment = () => {
	return (
		<section className="bg-gray-100 py-12">
			<div className="container mx-auto px-4">
				<div className="text-center">
					<h2 className="text-3xl lg:text-4xl font-semibold mb-4">Our Commitment</h2>
					<p className="text-gray-700 text-lg mb-8">
						At ToyCars World, we are committed to providing the best experience for our customers. Our mission is to bring joy and excitement to every
						toy car enthusiast, one car at a time.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<CommitmentCard
						image="https://thumbs.dreamstime.com/b/medal-green-icon-approved-certified-isolated-white-background-flat-design-vector-illustration-149281955.jpg"
						title="Quality Products"
						description="We offer a curated selection of high-quality toy cars."
					/>
					<CommitmentCard
						image="https://previews.123rf.com/images/oliviart/oliviart2006/oliviart200600121/149000564-delivery-icon-isolated-on-white-background-fast-delivery-icon-fast-shipping-delivery-truck-truck.jpg"
						title="Fast Shipping"
						description="We ensure quick and reliable shipping to your doorstep."
					/>
					<CommitmentCard
						image="https://www.pngitem.com/pimgs/m/509-5093206_100-customer-satisfaction-guaranteed-hd-png-download.png"
						title="Customer Satisfaction"
						description="Your satisfaction is our top priority. We're here to help."
					/>
					<CommitmentCard
						image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTys9fGY7GtIyMuwCK_1YQH7OxW_fvemvpIr6Knqz761RvPZV9kr4F3qtLbdo9jC8wpuDQ&usqp=CAU"
						title="Feedback Welcome"
						description="We value your feedback and are always striving to improve."
					/>
				</div>
			</div>
		</section>
	);
};

const CommitmentCard = ({ image, title, description }) => {
	return (
		<div className="text-center">
			<div className="bg-white p-4 rounded-lg shadow-lg">
				<img src={image} alt={title} className="mx-auto w-32 h-32 object-cover  mb-4" />
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
				<p className="text-gray-700">{description}</p>
			</div>
		</div>
	);
};

export default Commitment;

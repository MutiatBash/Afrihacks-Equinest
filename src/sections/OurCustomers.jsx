import React from "react";
import { customers } from "../data";
import { CustomerEquinestCards } from "../components/EquinestCards";

const OurCustomers = () => {
	return (
		<section className="p-5 lg:px-16 lg:py-16 flex flex-col gap-10 bg-white">
			<h3 className="text-[1.7rem] lg:text-[3.2rem] w-full lg:leading-[4.3rem] font-bold">
				Happy Customers
			</h3>
			<div className="grid md:grid-cols-3 gap-8 py-6 lg:py-6">
				{customers.map((customer, index) => {
					return (
						<CustomerEquinestCards
							key={index}
							image={customer.image}
							name={customer.name}
							comment={customer.comment}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default OurCustomers;

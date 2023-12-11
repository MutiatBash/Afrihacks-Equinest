import React from "react";
// import { customers } from "../data";
import { CustomerEquinestCards } from "../components/EquinestCards";

export const customers = [
	{
		image: "../src/assets/images/customer1.svg",
		name: "Jenny Wilson",
		comment: `"I was always intimidated by investing, but this website has made it so easy! I love the clear explanations and the step-by-step guides. I'm finally feeling confident about my financial future."`,
	},
	{
		image: "../src/assets/images/customer2.svg",
		name: "Guy Hawkins",
		comment: `"This website is my budgeting bible! The tools and resources have helped me get my finances under control and save more money than ever before. I can't thank you enough!"
`,
	},
	{
		image: "../src/assets/images/customer3.svg",
		name: "Jane Cooper",
		comment: `"We were drowning in debt until we found this website. Their expert advice and support helped us create a debt repayment plan and stick to it. We are now officially debt-free and living a much happier life!"
`,
	},
	{
		image: "../src/assets/images/customer4.svg",
		name: "Robert Fox",
		comment: `"I'm so grateful for this website. It helped me plan for a comfortable retirement and I'm now living the dream! Thanks for giving me the peace of mind to enjoy this stage of my life."

`,
	},
	{
		image: "../src/assets/images/customer5.svg",
		name: "Esther Howard",
		comment: `"As a single mom, I'm always looking for ways to save money and improve my financial situation. This website has been a lifesaver. I've learned so much and I'm now feeling more secure about my family's future."
`,
	},
	{
		image: "../src/assets/images/customer6.svg",
		name: "Wade Warren",
		comment: `"This website has been invaluable to me as I start my career. The articles and resources have helped me understand complex financial concepts and make smart decisions about my money. I highly recommend it to any young professional."
`,
	},
];

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

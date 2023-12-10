import React from "react";
import { ProductEquinestCards } from "../components/EquinestCards";
import { homeProducts } from "../data";

const Products = () => {
	return (
		<section className="p-5 lg:px-16 lg:py-16 flex flex-col gap-12 justify-center items-center text-white text-center bg-lightGray">
			<div className="w-[40%]">
				<h3 className="text-[1.7rem] lg:text-[3.2rem] w-full lg:leading-[4.3rem] font-semibold">
					Our Products
				</h3>
				<p className="py-2">We offer some varieties of products</p>
			</div>
			<div className="grid md:grid-cols-4 gap-x-8 py-6 lg:py-6">
				{homeProducts.map((product, index) => {
					return (
						<ProductEquinestCards
							icon={product.icon}
                            title={product.title}
                            subtitle={product.subtitle}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Products;

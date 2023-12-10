import React from "react";
import targetImg from "/images/ourtarget.svg"

const OurTarget = () => {
	return (
		<section className="flex flex-row p-5 bg-darkGray text-white lg:px-16 lg:py-14 gap-6 justify-between items-center text-left">
			<div className="w-[40%]">
				<img src={targetImg} />
			</div>
			<div className="w-[40%] text-end">
				<h3 className="text-[1.7rem] text-primaryYellow lg:text-[3.2rem] w-full lg:leading-[4.3rem] font-bold">
					Our Target
				</h3>
				<p className="py-2 lg:text-xl">
					Our target is to provide informative, engaging, and accessible
					financial resources to women of all backgrounds.
				</p>
				<p className="py-2 lg:text-xl">
					We strive to simplify complex financial concepts and empower
					women to save, and invest their money for a better tomorrow
				</p>
			</div>
		</section>
	);
};

export default OurTarget;

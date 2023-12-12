import React from "react";
import ratings from "../assets/images/ratings.svg"

export const YellowEquinestCards = ({ icon, title, subtitle }) => {
	return (
		<div className="flex flex-col gap-4 md:gap-6 text-center p-6 pb-12 bg-primaryYellow rounded-2xl shadow-xl text-black justify-center items-center">
			<img src={icon} className="w-[20%]" />
			<h6 className="font-medium text-xl">{title}</h6>
			<p className="text-sm">{subtitle}</p>
		</div>
	);
};

export const GrayEquinestCards = ({ icon, title, subtitle }) => {
	return (
		<div className="flex flex-col gap-4 md:gap-6 text-center p-6 pb-12 bg-darkGray rounded-2xl shadow-xl text-white justify-center items-center">
			<img src={icon} className="w-[20%]" />
			<h6 className="font-medium text-xl">{title}</h6>
			<p className="text-sm">{subtitle}</p>
		</div>
	);
};

export const ProductEquinestCards = ({ icon, title, subtitle }) => {
	return (
		<div className="flex flex-col gap-4 md:gap-8 text-center p-6 text-white justify-center items-center">
			<img src={icon} className="w-[20%]" />
			<div>
				<h6 className="font-semibold text-xl">{title}</h6>
				<p className="text-sm py-2">{subtitle}</p>
			</div>
		</div>
	);
};

export const CustomerEquinestCards = ({ image, name, comment }) => {
	return (
		<div className="flex flex-col gap-4 md:gap-6 p-6 px-4 bg-gray rounded-2xl shadow-lg text-darkGray">
			<div className="flex flex-row justify-between items-center">
				<div className="flex flex-row gap-2 items-center">
					<img src={image} className="w-[20%]" />
					<h6 className="font-medium">{name}</h6>
				</div>
				<div className="w-[25%]">
					<img src={ratings} />
				</div>
			</div>
			<p className="text-xs">{comment}</p>
		</div>
	);
};

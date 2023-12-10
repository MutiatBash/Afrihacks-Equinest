import React from 'react'

export const YellowEquinestCards = ({icon,title,subtitle}) => {
  return (
		<div className="flex flex-col gap-4 md:gap-6 text-center p-6 pb-12 bg-primaryYellow rounded-2xl shadow-xl text-black justify-center items-center">
			<img src={icon} className="w-[20%]" />
			<h6 className="font-semibold text-xl">{title}</h6>
			<p className="text-sm">{subtitle}</p>
		</div>
  );
}

export const GrayEquinestCards = ({ icon, title, subtitle }) => {
	return (
		<div className="flex flex-col gap-4 md:gap-6 text-center p-6 pb-12 bg-darkGray rounded-2xl shadow-xl text-white justify-center items-center">
			<img src={icon} className='w-[20%]' />
			<h6 className='font-semibold text-xl'>{title}</h6>
			<p className='text-sm'>{subtitle}</p>
		</div>
	);
};




export const PrimaryButton = ({ text, className, onClick }) => {
	return (
		<div>
			<button
				onClick={onClick}
				className={`gap-2 w-[fit-content] py-[0.8rem] px-2 whitespace-nowrap text-base text-darkGray bg-primaryYellow font-semibold md:py-[0.6875rem] md:px-5 hover:shadow-md transition-all ease-in cursor-pointer ${className}`}
			>
				{text}
			</button>
		</div>
	);
};

export const SecondaryButton = ({ text, className, onClick }) => {
	return (
		<div>
			<button
				onClick={onClick}
				className={`gap-2 w-[fit-content] py-[0.8rem] px-2 whitespace-nowrap text-base bg-transparent border border-white text-white font-semibold md:py-[0.6875rem] md:px-5 hover:shadow-md cursor-pointer transition-all ease-in ${className}`}
			>
				{text}
			</button>
		</div>
	);
};

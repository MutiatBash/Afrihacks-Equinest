import React from 'react'
import { Link } from 'react-router-dom';
import heroImg from "/images/hero-image.svg"
// import leftNet from "/images/hero-net-left.svg"
// import rightNet from "/images/hero-net-right.svg"

const Hero = () => {
  return (
		<section className=" pt-3 lg:pt text-center bg-[#464545] pb-0">
		
			<div className="flex flex-col gap-6 lg:gap-10 items-center justify-center pt-8 lg:pt-16 font-['Rubik'] lg:px-16 pb-0">
				<h2 className="text-[#fff]  text-[1.7rem] lg:text-6xl w-full lg:w-[70%] lg:leading-[4.5rem]">
					Endless Financial Opportunities with{" "}
					<span className="text-[#FFC700]">EquiNest</span>
				</h2>
				<p className="text-[#fdfcfd] lg:w-[50%] lg:text-[1.2rem] pb-4 lg:leading-8">
					Building Your Financial Fortress... Your digital access to Secure
					Your Future with Smart Savings and effortless financial
					management
				</p>
				<div>
					<Link to="/create-events">
						{/* <IconButton
							text="Create Events"
							icon="/images/arrow-up-right.svg"
							divClass="w-full"
							iconStyle={`w-6 h-6`}
							className="text-[#FFFDFC] font-['Stoke'] px-14 w-full lg:text-base "
						/> */}
					</Link>
				</div>
				<div>
					<img src={heroImg} />
				</div>
			</div>
		</section>
  );
}

export default Hero

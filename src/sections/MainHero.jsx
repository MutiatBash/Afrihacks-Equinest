import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import leftNet from "../assets/images/hero-net-left.svg";
import rightNet from "../assets/images/hero-net-right.svg";

const MainHero = () => {
	return (
		<div>
			<section className="bg-lightGray relative ">
				<div className="absolute -left-16 z-30 pointer-events-none">
					<img src={leftNet} />
				</div>
				<div className="absolute -right-16 z-30 pointer-events-none">
					<img src={rightNet} />
				</div>
				<div className="fixed inset-x-0">
					<Navbar />
				</div>
				<Hero />
			</section>
		</div>
	);
};

export default MainHero;

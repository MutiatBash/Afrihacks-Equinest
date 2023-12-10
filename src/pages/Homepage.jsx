import React from "react";
import Hero from "../sections/Hero";
import MainHero from "../sections/MainHero";
import ChooseBetter from "../sections/ChooseBetter";
import Navbar from "../components/Navbar";

const Homepage = () => {
	return (
		<div className="overflow-x-hidden overflow-y-scroll">
			{/* <Navbar/> */}
			<MainHero />
			<ChooseBetter />
		</div>
	);
};

export default Homepage;

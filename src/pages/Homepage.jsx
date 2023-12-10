import React from "react";
import Hero from "../sections/Hero";
import MainHero from "../sections/MainHero";
import ChooseBetter from "../sections/ChooseBetter";
import Navbar from "../components/Navbar";
import Products from "../sections/Products";
import OurVision from "../sections/OurVision";
import OurTarget from "../sections/OurTarget";

const Homepage = () => {
	return (
		<div className="overflow-x-hidden overflow-y-scroll">
			{/* <Navbar/> */}
			<MainHero />
			<ChooseBetter />
			<Products/>
			<OurVision/>
			<OurTarget/>
		</div>
	);
};

export default Homepage;

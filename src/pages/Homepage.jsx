import React from "react";
import Hero from "../sections/Hero";
import MainHero from "../sections/MainHero";
import ChooseBetter from "../sections/ChooseBetter";
import Navbar from "../components/Navbar";
import Products from "../sections/Products";
import OurVision from "../sections/OurVision";
import OurTarget from "../sections/OurTarget";
import OurCustomers from "../sections/OurCustomers";
import Subscribe from "../sections/Subscribe";
import Footer from "../sections/Footer";

const Homepage = () => {
	return (
		<div className="overflow-x-hidden overflow-y-scroll">
			<MainHero />
			<ChooseBetter />
			<Products/>
			<OurVision/>
			<OurTarget/>
			<OurCustomers/>
			<Subscribe/>
			<Footer/>
		</div>
	);
};

export default Homepage;

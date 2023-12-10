import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import leftNet from "/images/hero-net-left.svg";
import rightNet from "/images/hero-net-right.svg";

const MainHero = () => {
  return (
		<section className="bg-[#464545] relative">
			<div className="absolute -left-16 z-30">
				<img src={leftNet} />
			</div>
			<div className="absolute -right-16 z-30">
				<img src={rightNet} />
			</div>
			<Navbar />
			<Hero />
		</section>
  );
}

export default MainHero

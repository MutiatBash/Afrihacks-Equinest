import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/footerLogo.svg";

const Footer = () => {
	return (
		<footer>
			<div className="w-full h-full px-4 py-8 lg:py-10 lg:px-16 bg-[#fff] text-darkGray">
				<div className="flex flex-col lg:flex-nowrap lg:flex-row gap-y-5 gap-x-8 lg:gap-y-0  lg:gap-x-3 lg:justify-between py-3">
					<div className="w-[50%] self-center lg:w-1/4">
						<img src={Logo} />
					</div>
					<div className="flex flex-col gap-3 lg:gap-5 ">
						<div>
							<p className="text-md font-semibold">Services</p>
						</div>
						<div className="flex flex-col gap-3 text-sm font-light">
							<Link className="hover:text-primaryYellow" to="/">
								Saving Money
							</Link>

							<Link
								className="hover:text-primaryYellow"
								to="/information"
							>
								Investments
							</Link>

							<Link className="hover:text-primaryYellow" to="/shop">
								Financial Communities
							</Link>

							<Link
								className="hover:text-primaryYellow"
								to="/terms-of-service"
							>
								Getting Loan
							</Link>
							<Link
								className="hover:text-primaryYellow"
								to="/terms-of-service"
							>
								Financial Advice
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-3 lg:gap-5">
						<div>
							<p className="text-md font-semibold">About Us</p>
						</div>
						<div className="flex flex-col gap-3 text-sm font-light">
							<Link
								className="hover:text-primaryYellow cursor-pointer"
								to="/"
							>
								Financial Expertise
							</Link>

							<Link className="hover:text-primaryYellow" to="/">
								Contact Address
							</Link>

							<Link className="hover:text-primaryYellow" to="/shop">
								Partners
							</Link>
						</div>
					</div>
					<div className="flex flex-col  gap-3 lg:gap-5">
						<div>
							<p className="text-md font-semibold">Contact</p>
						</div>
						<div className="flex flex-col gap-3 text-sm font-light">
							<Link className="hover:text-primaryYellow" to="/">
								+23487690345678
							</Link>

							<Link
								className="hover:text-primaryYellow"
								to="/information"
							>
								info@equinest.com
							</Link>

							<Link className="hover:text-primaryYellow" to="/">
								54 jones close porthacourt
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:pt-2 text-sm lg:text-base text-center">
				<div className="border-[0.3px] w-full lg:mt-10 border-[#d9d9d971]"></div>
				<p className="py-3 lg:py-5 font-light">
					2023 Equinest. All Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;

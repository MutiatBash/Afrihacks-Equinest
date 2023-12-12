import { useState, useContext } from "react";
import Logo from "../assets/images/navlogo.svg";
import { Link, useLocation } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "./Button";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { Button } from "./Button";
// import { MobileMenu } from "./MobileMenu";

export const links = [
	{
		id: 1,
		url: "/",
		text: "Home",
	},
	{
		id: 2,
		url: "/about",
		text: "About us",
	},
	{
		id: 3,
		url: "/services",
		text: "Services",
	},
	{
		id: 4,
		url: "/contact",
		text: "Contact us",
	},
];

const Navbar = () => {
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="w-full flex flex-col gap-3 h-full py-4 px-4 md:px-14 lg:px-16 bg-[#464545] sticky top-0 z-20">
			<div className="w-full flex items-center justify-between">
				<div className="w-[15%]">
					<img src={Logo} alt="logo" />
				</div>
				<ul className="hidden lg:flex items-center gap-5 lg:gap-[3rem]">
					{links.map((links) => (
						<li className="group relative" key={links.id}>
							<Link
								to={links.url}
								className={`nav-item text-[#fff] transition duration-300 ease-in text-lg font-medium ${
									location.pathname === links.url
										? "text-primaryYellow"
										: ""
								}`}
							>
								{links.text}
							</Link>
							<div className="absolute w-full left-0 h-0.5 bg-primaryYellow transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
						</li>
					))}
				</ul>
				<div className="flex flex-row gap-6">
					<Link to="/signup">
						<PrimaryButton text="Get Started" />
					</Link>
					<Link to="/login">
						<SecondaryButton text="Log in" />
					</Link>
				</div>

				<div className="flex lg:hidden flex-row gap-10 items-center justify-between">
					{/* <button onClick={handleMenu} className="">
						{menuOpen ? (
							<FontAwesomeIcon icon={faXmark} />
						) : (
							<FontAwesomeIcon icon={faBars} />
						)}
					</button> */}
				</div>
			</div>
			{/* {menuOpen && <MobileMenu />} */}
		</div>
	);
};

export default Navbar;

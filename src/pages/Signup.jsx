import React from "react";
import signUp from "/images/signupImg.svg";
import Input from "../components/Inputs";

const Signup = () => {
	return (
		<section className="flex flex-row justify-between">
			<div className="flex flex-row justify-center items-center p-4  h-screen">
				<form
					action=""
					// onSubmit={handleSignup}
					className=" w-full p-4 lg:p-8 lg:py-10 flex flex-col gap-4 lg:gap-8 justify-between"
				>
					<div className="flex flex-col gap-3">
						<h3 className="text-3xl">Create an EquiNest Account</h3>
						<p className=" py-2">
							Ensure you register so we can serve you better
						</p>
					</div>
					<div>
						<Input label="Full Name" name="fullName" type="text" />
						<Input label="Email Address" name="emailAddress" type="email" />
						<Input label="Phone Number" name="phoneNumber" type="tel" />
						<Input label="BVN" name="bvn" type="number" />
						<Input label="Password" name="password" type="password" />
						<Input label="Confirm Password" name="password" type="password" />
					</div>

					<div className="w-full py-6 lg:px-24 self-center mx-auto">
						<button
							// disabled={email === ""}
							type="submit"
							// className={`w-full flex flex-row items-center justify-center mx-auto py-3 lg:py-4 rounded-[28px] text-[#FFFDFC] text-center self-center ${
							// 	email === ""
							// 		? "bg-[#3c3a3a9e] disabled:pointer-events-none disabled:cursor-none text-[#fffdfc55] font-normal"
							// 		: "bg-[#F57328] font-semibold"
							// }`}
						>
							{/* {loading ? (
								<ThreeCircles
									height="20"
									color="#fdfcfd"
									ariaLabel="three-rotating-circles"
									wrapperClass="text-center mx-auto"
								/>
							) : (
								<span>Sign Up</span>
							)} */}
						</button>
					</div>
				</form>

				{/* <div className="fixed inset-y-0"> */}
				{/* {user?.issuer && (
					<div className=" w-full backdrop-blur fixed inset-x-0 inset-y-0 z-20 flex flex-col justify-center items-center">
						<div className="text-[#fdfcfd] bg-[#030203] rounded-2xl p-10 py-8 text-center flex flex-col justify-center items-center gap-8 h-[40%] lg:w-[35%]">
							<p className="leading-7 text-lg">
								You have Successfully Signed Up or Logged In with your
								email address
							</p>
							<button className="rounded-3xl p-3 px-2 bg-[#F57328] font-semibold w-[45%] hover:font-bold hover:scale-105 transition-all ease-in-out">
								<Link to="/">Go home</Link>
							</button>
						</div>
					</div>
				)} */}
				{/* </div> */}
			</div>
			<div>
				<img src={signUp} />
			</div>
		</section>
	);
};

export default Signup;

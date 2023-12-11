import React, { useContext } from "react";
import { Input } from "../components/Inputs";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/Button";
import authLogo from "../assets/images/authLogo.svg";
import { userContext } from "../userContext";

const VerifyEmail = () => {
    const {emailAddress} = useContext(userContext)
	return (
		<section className="flex flex-col p-5 justify-center gap-12 items-center lg:p-16 my-auto">
			<div className="top-0 self-start">
				<img src={authLogo} />
			</div>
			<div className="flex flex-col gap-10 justify-center lg:w-[50%] mx-auto">
				<div className="flex flex-col gap-2 text-center">
					<h3 className="text-3xl font-semibold">Verify Email Address</h3>
					<p className="">
						We’ll send a code to your email address to confirm you own it
					</p>
				</div>
				<p className="text-primaryYellow text-center text-lg">
                    {emailAddress}
				</p>
				<form className="flex flex-col gap-6">
					<Input label="Verification Code" />
					<p className="text-center text-darkGray font-semibold text-xl">
						Resend Code
					</p>
					<div className="flex flex-col gap-3 text-center pt-6">
						<PrimaryButton
							className="w-full shadow"
							text="Verify"
							type="submit"
						/>
						<p>
							Don't have an account?{" "}
							<Link to="/signup" className="text-primaryYellow">
								Signup
							</Link>
						</p>
					</div>
				</form>
			</div>
		</section>
	);
};

export default VerifyEmail;

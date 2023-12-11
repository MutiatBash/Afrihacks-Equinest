import React, {useState} from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/Button";
import authLogo from "../assets/images/authLogo.svg";
import { Input } from "../components/Inputs";
import verify from "../assets/images/alertVerify.svg";
import SuccessModal from "../components/SuccessModal";

const Agreement = () => {
	const [successful, setSuccessful] = useState(false);
	const handleSignUpSuccess = () => {
		setSuccessful(!successful);
	};

	return (
		<section className="flex flex-col p-5 justify-center items-center gap-12 lg:p-16 my-auto">
			<div className="top-0 self-start">
				<img src={authLogo} />
			</div>
			<div className="flex flex-col gap-10 justify-center  lg:w-[50%] mx-auto">
				<div className="self-center">
					<img src={verify} />
				</div>
				<div className="flex flex-col gap-2 text-center">
					<h3 className="text-3xl font-semibold">
						Before you Open your EquiNest Account
					</h3>
					<p className="">
						By Opening this EquiNest account you agree that the following
						are true
					</p>
					<p>
						All the information I gave to open this account are mine and
						accurate
					</p>
					<p>
						I promise not to use this account for any fraudulent, criminal
						or illegal activity.
					</p>
					<p>
						If EquiNest finds out or suspects i am using this account for
						any fraudulent, criminal or illegal activity,the bank can
						restrict or close my account
					</p>
					<p>
						Equinest will report any transaction on this account that
						appears suspicious or exceeds regulatory limits to law
						enforcement agencies and regulatory authorities
					</p>
				</div>

				<form className="flex flex-col gap-6">
					<div className="flex flex-row gap-3 border border-darkGray rounded p-3 text-sm font-light">
						<input type="checkbox" />
						<span>I agree and wish to continue</span>
					</div>

					<div className="flex flex-col gap-3 text-center pt-6">
						<PrimaryButton
							className="w-full shadow"
							text="Register"
							type="button"
							onClick={handleSignUpSuccess}
						/>
					</div>
				</form>
				{successful && <SuccessModal successText="created an account" buttonText="Continue" link="/dashboard/"/>}
			</div>
		</section>
	);
};

export default Agreement;

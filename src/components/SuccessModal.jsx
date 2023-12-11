import React from 'react'
import success from "../assets/images/successIcon.svg"
import { PrimaryButton } from './Button'
import { Link } from 'react-router-dom'

const SuccessModal = ({successText, buttonText,link }) => {
  return (
		<div className=" fixed inset-x-0 mx-auto bg-white h-full inset-y-0 flex flex-col justify-center items-center text-center">
			<div className="flex flex-col gap-4 lg:gap-10 mx-auto items-center justify-center ">
				<div>
					<img src={success} />
				</div>
				<div className="flex flex-col gap-3">
					<h4 className="text-xl lg:text-3xl text-lightGray font-semibold">
						Bravo!!!
					</h4>
					<p>Congratulations, You've successfully created {successText}</p>
				</div>

				<Link to={link}>
					<PrimaryButton text={buttonText} className="w-full" />
				</Link>
			</div>
		</div>
  );
}

export default SuccessModal

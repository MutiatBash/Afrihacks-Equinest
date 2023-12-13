import React from 'react'
import success from "../assets/images/successIcon.svg"
import { PrimaryButton } from './Button'
import { Link } from 'react-router-dom'
import Header from './Header'

const SuccessModal = ({successText, buttonText,link }) => {
  return (	
			<div className=" mx-auto bg-white flex flex-col justify-center items-center text-center">
				<div className="flex flex-col gap-4 lg:gap-10 mx-auto items-center justify-center py-14 ">
					<div>
						<img src={success} />
					</div>
					<div className="flex flex-col gap-3">
						<h4 className="text-xl lg:text-3xl text-lightGray font-semibold">
							Bravo!!!
						</h4>
						<p>
							Congratulations, You've successfully created {successText}
						</p>
					</div>

					<Link to={link}>
						<PrimaryButton text={buttonText} className="w-full" />
					</Link>
				</div>
			</div>
  );
}

export default SuccessModal

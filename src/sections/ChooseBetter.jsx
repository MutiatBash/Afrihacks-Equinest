import React from 'react'
import { GrayEquinestCards, YellowEquinestCards } from '../components/EquinestCards'
import {homeFeatures} from "../../src/data"

const ChooseBetter = () => {
  return (
		<section className="p-5 lg:px-16 lg:py-24 flex flex-col gap-8">
			<div className="w-[40%]">
				<h3 className="text-[1.7rem] lg:text-[3.5rem] w-full lg:leading-[4.3rem] font-bold">
					Choose Better with{" "}
					<span className="text-primaryYellow">Equinest</span>
				</h3>
			</div>
			<div className="grid md:grid-cols-4 gap-x-6 py-6 lg:pt-12 pb-[7rem]">
				<GrayEquinestCards
					icon={"/images/secure-transaction.svg"}
					title="Secure Transaction"
					subtitle="Save your money with us and stand a chance of gaining up to 12% interest rate"
				/>
				<YellowEquinestCards
					icon={"/images/investment-report.svg"}
					title="Investment Report"
					subtitle="Invest your money into any of our investment plans and stand a chance to cash out big!!!"
				/>
				<GrayEquinestCards
					icon={"/images/secure-transaction.svg"}
					title="Customer Centric"
					subtitle="We keep our customers happy and resolves issues quickly"
				/>
				<YellowEquinestCards
					icon={"/images/investment-report.svg"}
					title="Track Transaction"
					subtitle="We keep our customers happy and resolves issues quickly"
				/>
			</div>
		</section>
  );
}

export default ChooseBetter

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import authLogo from "../assets/images/authLogo.svg";
import { PrimaryButton } from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../userContext";

const InvestmentPlanForm = () => {
	const { loading, setLoading } = useContext(userContext);

	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = async (data, e) => {
		e.preventDefault();
		console.log(data);
		try {
			setLoading(true);
			await new Promise((resolve) => setTimeout(resolve, 2000));
		} catch (error) {
			console.error("Thrift creation failed", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section>
			<div className="flex flex-row justify-center items-center w-[50%] mx-auto">
				<form
					action=""
					onSubmit={handleSubmit(onSubmit)}
					className=" w-full py-8 lg:py-14 flex flex-col gap-4 lg:gap-10 justify-between"
				>
					<div className="flex flex-col gap-2">
						<h3 className="text-3xl text-center font-semibold">
							Start New Thrift
						</h3>
					</div>
					<div className="flex flex-col gap-6">
						<div className="flex flex-col w-full gap-2">
							<label htmlFor="thriftTitle" className="">
								Thrift title
							</label>
							<input
								id="thriftTitle"
								type="text"
								className="py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
								name="thriftTitle"
								placeholder="Christmas"
								{...register("thriftTitle", {
									required: "Thrift title is required",
								})}
							/>
							<span className="text-red text-sm ">
								{errors.thriftTitle && errors.thriftTitle.message}
							</span>
						</div>
						<div className="flex flex-col w-full gap-2">
							<label htmlFor="numberOfParticipants" className="">
								Number of participants
							</label>
							<input
								id="numberOfParticipants"
								type="number"
								className="signup-input-form py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
								name="numberOfParticipants"
								placeholder="10"
								{...register("numberOfParticipants", {
									required: "Number of participants is required",
								})}
							/>
							<span className="text-red text-sm ">
								{errors.numberOfParticipants &&
									errors.numberOfParticipants.message}
							</span>
						</div>

						<div className="flex flex-col w-full gap-2">
							<label htmlFor="savingsAmount" className="">
								Savings Amount
							</label>
							<input
								id="savingsAmount"
								type="number"
								className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
								name="savingsAmount"
								placeholder="5000"
								{...register("savingsAmount", {
									required: "Savings amount is required",
								})}
							/>
							<span className="text-red text-sm ">
								{errors.savingsAmount && errors.savingsAmount.message}
							</span>
						</div>

						<div className="flex flex-col w-full gap-2">
							<label htmlFor="interestRate" className="">
								Interest rate
							</label>
							<input
								id="interestRate"
								type="number"
								className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
								name="interestRate"
								placeholder="5% p.a"
								{...register("interestRate", {
									required: "Interest rate is required",
								})}
							/>
							<span className="text-red text-sm ">
								{errors.interestRate && errors.interestRate.message}
							</span>
						</div>

						<div className="flex flex-col w-full gap-2">
							<label htmlFor="startDate" className="">
								Start date
							</label>
							<input
								id="startDate"
								type="date"
								className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
								name="startDate"
								placeholder="22/08/2023"
								{...register("startDate", {
									required: "Start date is required",
								})}
							/>
							<span className="text-red text-sm ">
								{errors.startDate && errors.startDate.message}
							</span>
						</div>
						<div className="flex flex-col w-full gap-2">
							<label htmlFor="endDate" className="">
								End date
							</label>
							<input
								id="endDate"
								type="date"
								className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
								name="endDate"
								placeholder="21/10/2023"
								{...register("endDate", {
									required: "End date is required",
								})}
							/>
							<span className="text-red text-sm ">
								{errors.endDate && errors.endDate.message}
							</span>
						</div>
					</div>

					<div className="flex flex-col gap-3 text-center">
						<PrimaryButton
							className={` w-[65%] shadow`}
							disabled={loading}
							text={loading ? "Creating Thrift..." : "Create Thrift"}
						/>
					</div>
				</form>
			</div>
		</section>
	);
};

export default InvestmentPlanForm;

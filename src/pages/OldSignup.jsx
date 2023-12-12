import React from "react";
import signUp from "../assets/images/signupImg.svg";
import { InputFormik } from "../components/Inputs";
import { useFormik } from "formik";
import { Formik, Field, Form, ErrorMessage } from "formik";
import authLogo from "../assets/images/authLogo.svg";
import { PrimaryButton } from "../components/Button";
import { Link } from "react-router-dom";

const OldSignup = () => {
	function validateEmail(value) {
		let error;
		if (!value) {
			error = "Required";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error = "Invalid email address";
		}
		return error;
	}
	const validate = (values) => {
		const errors = {};

		if (!values.fullName) {
			errors.fullName = "Required";
		} else if (values.fullName.length > 15) {
			errors.fullName = "Must be 15 characters or less";
		}
		// if (!values.emailAddress) {
		// 	errors.emailAddress = "Required";
		// } else if (
		// 	!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)
		// ) {
		// 	errors.emailAddress = "Invalid email address";
		// }
		if (!values.bvn) {
			errors.bvn = "Required";
		} else if (values.bvn.length > 20) {
			errors.bvn = "Must be 20 characters or less";
		}
		if (!values.phoneNumber) {
			errors.phoneNumber = "Required";
		}
		if (!values.password) {
			errors.password = "Required";
		} else if (
			!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
				values.password
			)
		) {
			errors.password =
				"Password must have at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character";
		}

		return errors;
	};
	const formik = useFormik({
		initialValues: {
			fullName: "",
			emailAddress: "",
			phoneNumber: "",
			bvn: "",
			password: "",
			confirmPassword: "",
		},
		validate,
		onSubmit: (values, { setSubmitting }) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				setSubmitting(false);
			}, 400);
		},
	});
	return (
		<section className="flex flex-col justify-between p-5 lg:px-16 lg:py-8">
			<div className="top-0">
				<img src={authLogo} />
			</div>
			<div className="flex flex-row justify-between pt-8">
				<div className="flex flex-row justify-center items-center w-[40%]">
					<Formik>
						{({ isSubmitting }) => (
							<Form
								action=""
								onSubmit={formik.handleSubmit}
								className=" w-full py-8 lg:py-14 flex flex-col gap-4 lg:gap-10 justify-between"
							>
								<div className="flex flex-col gap-2">
									<h3 className="text-3xl">
										Create an EquiNest Account
									</h3>
									<p className="">
										Ensure you register so we can serve you better
									</p>
								</div>
								<div className="flex flex-col gap-6">
									<InputFormik
										label="Full Name"
										name="fullName"
										type="text"
										onChange={formik.handleChange}
										value={formik.values.fullName}
										error={
											formik.errors.fullName
												? formik.errors.fullName
												: ""
										}
									/>
									<InputFormik
										label="Email Address"
										name="emailAddress"
										type="email"
										onChange={formik.handleChange}
										value={formik.values.emailAddress}
										validate={validateEmail}
										error={
											formik.errors.emailAddress
												? formik.errors.emailAddress
												: ""
										}
									/>
									<InputFormik
										label="Phone Number"
										name="phoneNumber"
										type="tel"
										onChange={formik.handleChange}
										value={formik.values.phoneNumber}
										error={
											formik.errors.phoneNumber
												? formik.errors.phoneNumber
												: ""
										}
									/>
									<InputFormik
										label="BVN"
										name="bvn"
										type="number"
										onChange={formik.handleChange}
										value={formik.values.bvn}
										error={formik.errors.bvn ? formik.errors.bvn : ""}
									/>
									<InputFormik
										label="Password"
										name="password"
										type="password"
										onChange={formik.handleChange}
										value={formik.values.password}
										error={
											formik.errors.password
												? formik.errors.password
												: ""
										}
									/>
									<InputFormik
										label="Confirm Password"
										name="confirmPassword"
										type="password"
										onChange={formik.handleChange}
										value={formik.values.confirmPassword}
									/>
								</div>

								<div className="flex flex-col gap-3 text-center">
									<PrimaryButton
										className="w-full shadow"
										text="Proceed"
									/>
									<p>
										Already have an account?{" "}
										<Link to="/login" className="text-primaryYellow">
											Login
										</Link>
									</p>
								</div>
								{/* <div className="w-full py-6 lg:px-24 self-center mx-auto">
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
							)} 
							</button>
						</div> */}
							</Form>
						)}
					</Formik>

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
				<div className="fixed right-0 inset-y-0 p-14 w-[50%] bg-white ">
					<img src={signUp} className="w-[ h-full" />
				</div>
			</div>
		</section>
	);
};

export default OldSignup;

import React, { useContext } from "react";
import signUp from "../assets/images/signupImg.svg";
import { InputFormik } from "../components/Inputs";
import { useFormik } from "formik";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useForm } from "react-hook-form";
import authLogo from "../assets/images/authLogo.svg";
import { PrimaryButton } from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../userContext";
import axios from "axios"

const Signup = () => {
	const navigate = useNavigate();
	const { emailAddress, setEmailAddress,fullName, setFullName, loading, setLoading } =
		useContext(userContext);

	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
	} = useForm();
	
	// const onSubmit = async (data, e) => {
	// 	e.preventDefault();
	// 	console.log(data);
	// 	try {
	// 		setLoading(true);
	// 		await new Promise((resolve) => setTimeout(resolve, 2000));
	// 		const userEmail = data?.emailAddress;
	// 		console.log(userEmail);
	// 		setEmailAddress(userEmail);
	// 		navigate("/verify-email");
	// 	} catch (error) {
	// 		console.error("Registration failed", error);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

	const onSubmit = async (data) => {
		// e.preventDefault(); 

		try {
			setLoading(true);

			
			const response = await axios.post(
				"https://equinest.onrender.com/api/registration/",
				data,
				{
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				}
			);

			
			if (response) {
				console.log("Registration successful");
				navigate("/login");
				
				// console.log(response.data);

				// const userEmail = data?.email;
				const user = data?.full_name
				console.log(user)
				setFullName(user)
				// console.log(userEmail);
				// setEmailAddress(userEmail);

				
			} else {
				console.error("Registration failed. Status:", response.status);
			}
		} catch (error) {
			console.error("Registration failed", error);

			
		} finally {
			setLoading(false);
		}
	};


	return (
		<section className="flex flex-col justify-between p-5 lg:px-16 lg:py-8">
			<div className="top-0">
				<img src={authLogo} />
			</div>
			<div className="flex flex-row justify-between pt-4 lg:pt-8">
				<div className="flex flex-row justify-center items-center lg:w-[40%]">
					<form
						action=""
						onSubmit={handleSubmit(onSubmit)}
						className=" w-full py-8 lg:py-14 flex flex-col gap-4 lg:gap-10 justify-between"
					>
						<div className="flex flex-col gap-2">
							<h3 className="text-xl lg:text-3xl font-semibold">Create an EquiNest Account</h3>
							<p className="text-sm lg:text-base">
								Ensure you register so we can serve you better
							</p>
						</div>
						<div className="flex flex-col gap-6">
							<div className="flex flex-col w-full gap-2">
								<label htmlFor="full_name" className="font-medium">
									Full Name
								</label>
								<input
									id="full_name"
									type="text"
									className="py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
									name="full_name"
									placeholder="Jane Doe"
									{...register("full_name", {
										required: "Full name is required",
									})}
								/>
								<span className="text-red text-sm ">
									{errors.full_name && errors.full_name.message}
								</span>
							</div>
							<div className="flex flex-col w-full gap-2">
								<label htmlFor="email" className="font-medium">
									Email Address
								</label>
								<input
									id="email"
									type="email"
									className="signup-input-form py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
									name="email"
									placeholder="Enter your email address"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: "Invalid email address",
										},
									})}
								/>
								<span className="text-red text-sm ">
									{errors.email && errors.email.message}
								</span>
							</div>

							<div className="flex flex-col w-full gap-2">
								<label htmlFor="phone_number" className="font-medium">
									Phone Number
								</label>
								<input
									id="phone_number"
									type="number"
									className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
									name="phone_number"
									placeholder="08078954124"
									{...register("phone_number", {
										required: "Phone number is required",
										// pattern: {
										// 	value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
										// 	message:
										// 		"Password must have at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
										// },
									})}
								/>
								<span className="text-red text-sm ">
									{errors.phone_number && errors.phone_number.message}
								</span>
							</div>

							<div className="flex flex-col w-full gap-2">
								<label htmlFor="bvn" className="font-medium">
									BVN
								</label>
								<input
									id="bvn"
									type="number"
									className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
									name="bvn"
									placeholder="222245566667788"
									{...register("bvn", {
										required: "BVN is required",
										maxLength:11,
										message:
												"BVN must not be more than 11 numbers ",
									
									})}
								/>
								<span className="text-red text-sm ">
									{errors.bvn && errors.bvn.message}
								</span>
							</div>

							<div className="flex flex-col w-full gap-2">
								<label htmlFor="password1" className="font-medium">
									Password
								</label>
								<input
									id="password1"
									type="password"
									className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
									name="password1"
									placeholder="********"
									{...register("password1", {
										required: "Password is required",
										pattern: {
											value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
											message:
												"Password must have at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
										},
									})}
								/>
								<span className="text-red text-sm ">
									{errors.password1 && errors.password1.message}
								</span>
							</div>
							<div className="flex flex-col w-full gap-2">
								<label
									htmlFor="password2"
									className="font-medium"
								>
									Confirm Password
								</label>
								<input
									id="password2"
									type="password"
									className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
									name="confirmPassword"
									placeholder="********"
									{...register("password2", {
										required: "Confirm your password",
										validate: (value) =>
											value === watch("password1") ||
											"Passwords do not match",
									})}
								/>
								<span className="text-red text-sm ">
									{errors.password2 &&
										errors.password2.message}
								</span>
							</div>
						</div>

						<div className="flex flex-col gap-3 text-center">
							<PrimaryButton
								className={`w-full shadow`}
								disabled={loading}
								text={loading ? "Submitting..." : "Proceed"}
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
				<div className="hidden md:block fixed right-0 inset-y-0 p-14 w-[50%] bg-white ">
					<img src={signUp} className="w-[ h-full" />
				</div>
			</div>
		</section>
	);
};

export default Signup;

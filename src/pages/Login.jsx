import React from "react";
import { useForm } from "react-hook-form";
import { InputReact } from "../components/Inputs";
import loginImg from "../assets/images/loginImage.svg";
import { PrimaryButton } from "../components/Button";
import { Link } from "react-router-dom";
import authLogo from "../assets/images/authLogo.svg";

const Login = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	// const onSubmit = (values) => alert(values.email + " " + values.password);
	const onSubmit = (data) => console.log(data);

	return (
		<section className="flex flex-col justify-between pt-8 p-5 lg:px-16 gap-10 lg:py-8 bg-white">
			<div className="top-0">
				<img src={authLogo} />
			</div>
			<div className="flex flex-row justify-between gap-10">
				<div className="w-[35%] flex flex-col gap-10 justify-center">
					<div className="flex flex-col gap-2 text-center">
						<h3 className="text-3xl">Welcome Back</h3>
						<p className="">Login to your Equinest account</p>
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-6"
					>
						<InputReact
							name="emailAddress"
							label="Email Address"
							placeholder="Enter your email address"
							type="email"
							// value={email}
							// onChange={handleChange}
							error={errors.email && errors.email.message}
							register={register}
							validationRules={{
								required: "Email is required",
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Invalid email address",
								},
								// Add more email-specific rules as needed
							}}
						/>

						<InputReact
							type="password"
							{...register("password", {
								required: "Required",
								pattern: {
									value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
									message:
										"Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.",
								},
							})}
							error={errors.password && errors.password.message}
							label="Password"
						/>
						<p className="text-primaryYellow text-end">
							Forgot Password?
						</p>
						<div className="flex flex-col gap-3 text-center pt-6">
							<PrimaryButton
								className="w-full shadow"
								text="Login"
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

				<div className="right-0 inset-y-0 p-14 w-[55%] bg-white">
					<img src={loginImg} className="h-full" />
				</div>
			</div>
		</section>
	);
};

export default Login;

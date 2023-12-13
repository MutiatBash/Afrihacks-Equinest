import React, { useContext } from "react";
import { useForm } from "react-hook-form";
// import {  Inputs } from "../components/Inputs";
import loginImg from "../assets/images/loginImage.svg";
import { PrimaryButton } from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import authLogo from "../assets/images/authLogo.svg";
import { userContext } from "../userContext";
import axios from "axios";

const Login = () => {
	const { loading, setLoading } = useContext(userContext);
	const navigate = useNavigate();
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		// e.preventDefault();

		try {
			setLoading(true);

			const response = await axios.post(
				"https://equinest.onrender.com/api/login/",
				data,
				{
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						// Authorization: `Bearer CwZiICMG52GbuqZSYLTOaHBIUlBEl5lrAgqVGCdboYM3RQStd7dNVx0OOuIMtDA3`,
					},
				}
			);

			if (response.data && response.data.key) {
				const jwtToken = response.data.key;
                console.log(jwtToken);
                
				document.cookie = `jwtToken=${jwtToken}; path=/; secure; HttpOnly; SameSite=Strict;`;

				console.log(response);
				navigate("/dashboard");
			} else {
				console.error("Login failed. Status:", response.status);
			}
		} catch (error) {
			console.error("Login failed", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="flex flex-col justify-between pt-8 p-5 lg:px-16 gap-10 lg:py-8 bg-white">
			<div className="top-0">
				<img src={authLogo} />
			</div>
			<div className="lg:flex lg:flex-row lg:justify-between lg:gap-10">
				<div className="lg:w-[35%] flex flex-col gap-10 justify-center">
					<div className="flex flex-col gap-2 text-center">
						<h3 className="text-2xl font-semibold lg:text-3xl">Welcome Back</h3>
						<p className="text-sm lg:text-base">Login to your Equinest account</p>
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-6"
					>
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
							<label htmlFor="password" className="font-medium">
								Password
							</label>
							<input
								id="password"
								type="password"
								className=" py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
								name="password"
								placeholder="********"
								{...register("password", {
									required: "Password is required",
									pattern: {
										value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
										message:
											"Password must have at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
									},
								})}
							/>
							<span className="text-red text-sm ">
								{errors.password && errors.password.message}
							</span>
						</div>
						<Link>
							<p className="text-primaryYellow text-end">
								Forgot Password?
							</p>
						</Link>

						<div className="flex flex-col gap-3 text-center pt-6">
							<PrimaryButton
								className="w-full shadow"
								text={loading ? "Logging in...." : "Login"}
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

				<div className="hidden md:block fixed right-0 inset-y-0 p-14 lg:w-[55%] bg-white">
					<img src={loginImg} className="h-full" />
				</div>
			</div>
		</section>
	);
};

export default Login;

const InputReact = ({
	name,
	label,
	placeholder,
	type,
	error,
	required,
	register,
	validationRules,
}) => (
	<div className="flex flex-col w-full gap-2">
		<label htmlFor={name} className="font-medium">
			{label}
		</label>
		<input
			id={name}
			type={type}
			className="signup-input-form py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
			name={name}
			placeholder={placeholder}
			{...register(name, validationRules)}
		/>
		<span className="text-red text-sm ">{error}</span>
	</div>
);

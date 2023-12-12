import React from "react";
import { Field } from "formik";
import { useForm } from "react-hook-form";

export const InputFormik = ({
	name,
	label,
	placeholder,
	type,
	value,
	onChange,
	error,
	validate,
}) => {
	return (
		<div className="flex flex-col w-full gap-2 whi">
			<label htmlFor={name} className="font-medium">
				{label}
			</label>
			<Field
				type={type}
				className="signup-input-form py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				validate={validate}
			/>
			<span className="text-red text-sm">{error}</span>
		</div>
	);
};

// export const InputReact = ({
// 	name,
// 	label,
// 	placeholder,
// 	type,
// 	value,
// 	onChange,
// 	error,
// 	register,
// }) => {
// 	return (
// 		<div className="flex flex-col w-full gap-2 whi">
// 			<label htmlFor={name} className="font-medium">
// 				{label}
// 			</label>
// 			<input
// 				type={type}
// 				className="signup-input-form py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
// 				name={name}
// 				placeholder={placeholder}
// 				value={value}
// 				onChange={onChange}
// 				{...register(label, { required:true })}
// 			/>
// 			<span className="text-red text-sm ">{error}</span>
// 		</div>
// 	);
// };

// export const InputReact = (
// 	{
// 		name,
// 		label,
// 		placeholder,
// 		type,
// 		value,
// 		onChange,
// 		error,
// 		required,
// 		register,
// 		validationRules = {},
// 	}) => (
// 		<div className="flex flex-col w-full gap-2">
// 			<label htmlFor={name} className="font-medium">
// 				{label}
// 			</label>
// 			<input
// 				id={name}
// 				type={type}
// 				className="signup-input-form py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
// 				name={name}
// 				placeholder={placeholder}
// 				// {...register(name, {validationRules} )}
// 			/>
// 			<span className="text-red text-sm ">{error}</span>
// 		</div>
// 	)

// export const Inputs = ({
// 	label,
// 	register,
// 	required,
// 	error,
// 	validationRules = {},
// }) => (
// 	<>
// 		<label>{label}</label>
// 		<input {...register(label, { validationRules })} className="border" />
// 		<p>{error}</p>
// 	</>
// );
export const Input = ({
	name,
	label,
	placeholder,
	type,
	value,
	onChange,
	error,
	validate,
	className,
}) => {
	return (
		<div className={`flex flex-col w-full gap-2 ${className}`}>
			<label htmlFor={name} className="font-medium">
				{label}
			</label>
			<input
				type={type}
				className="signup-input-form py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			<span className="text-red text-sm w-[10%]">{error}</span>
		</div>
	);
};

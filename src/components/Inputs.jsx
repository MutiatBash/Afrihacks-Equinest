import React from 'react'

const Input = ({name, label, placeholder, type}) => {
  return (
		<div className="flex flex-col w-full gap-3">
			<label htmlFor={name} className="font-medium">
				{label}
			</label>
			<input
				type={type}
				className="signup-input-form py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
				name={name}
				// placeholder="Full Name"
			/>
		</div>
  );
}

export default Input

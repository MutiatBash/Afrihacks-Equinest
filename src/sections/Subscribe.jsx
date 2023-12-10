import React from 'react'

const Subscribe = () => {
  return (
		<section className="p-5 lg:px-16 lg:py-16 bg-darkGray">
			<div className="bg-primaryYellow text-darkGray p-5 lg:px-16 lg:py-20 rounded-xl flex gap-8 flex-row justify-between">
				<div>
					<h3 className="text-[1.7rem] lg:text-3xl w-full font-bold">
						Subscribe to Our Newsletter
					</h3>
					<p className="">
						For New updates, resources and articles. Join Now
					</p>
				</div>
				<div className="w-[50%]">
					<div className="flex flex-row justify-between border border-darkGray p-1 rounded-lg">
						<input
							placeholder="Email"
							className="bg-transparent bg-primaryYellow placeholder:text-lightGray w-full border-none focus:outline-none px-2"
						/>
						<button className="bg-darkGray text-white rounded p-4 py-3">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</section>
  );
}

export default Subscribe

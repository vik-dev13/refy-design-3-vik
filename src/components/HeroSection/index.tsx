/** @format */

import React from "react";
import DesktopNav from "../Navbar/DesktopNav";
import KeyServices from "../KeyServices";

const HeroSection = () => {
	return (
		<div className="hero_container">
			<div className="container"></div>
			<div className="absolute  h-full w-full text-white !bg-[rgba(0,0,0,.80)]">
				<DesktopNav />
				<div className="flex flex-col  items-center justify-center  w-full h-full gap-6">
					<div className="flex flex-col items-center">
						<p className="font-[700] text-[36px] md:text-[48px] w-full text-center ">
							Empowering Your Business Growth
						</p>
						<p className="mt-1">
							Unlocking Potential Through Exceptional Services
						</p>
					</div>
					<div>
						<button className="bg-green-primary rounded-[100px] px-4 py-3 text-black">
							Know More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;

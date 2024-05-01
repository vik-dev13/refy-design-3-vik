/** @format */

import React from "react";
import CompanyLogoName from "./CompanyLogoName";
import Image from "next/image";

const MobileNav = () => {
	return (
		<div className="flex md:!hidden bg-green-primary text-black flex-row items-center justify-between py-1.5 px-2 h-[60px]">
			<CompanyLogoName />
			{/* <div className="relative h-[30px] w-[30px]">
				<Image src="/images/hamburger.png" alt="logo" fill />
			</div> */}
		</div>
	);
};

export default MobileNav;

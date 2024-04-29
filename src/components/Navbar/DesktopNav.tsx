/** @format */

import React from "react";
import CompanyLogoName from "./CompanyLogoName";
import { useRouter } from "next/router";

const liEle = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Who we are",
		link: "/who-we-are",
	},
	{
		name: "What we do",
		link: "/what-we-do",
	},
	{
		name: "Careers",
		link: "/careers",
	},
	{
		name: "Reach Us",
		link: "/reach-us",
	},
];

const DesktopNav = () => {
	const router = useRouter();
	return (
		<div className="hidden md:!flex bg-transparent mt-[30px] ">
			<div className=" flex md:!flex-row md:!justify-between md:!items-center bg-green-primary w-full mx-[10%] py-2.5 rounded-[100px] px-[24px]">
				<div>
					<CompanyLogoName />
				</div>
				<div className="flex flex-row gap-3">
					{liEle.map((item) => (
						<button
							key={item.name}
							className={`text-black hover:bg-white hover:rounded-[100px] px-2 py-1 ${
								router?.pathname === item?.link
									? "bg-white rounded-[100px]"
									: "inherit"
							}`}
						>
							{item?.name}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default DesktopNav;

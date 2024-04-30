/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";

const col1 = ["Home", "Who we are", "What we do", "Pricing", "Career"];
const col2 = ["More Info", "Privacy Policy", "Terms of Use", "Legal"];
const col3 = ["Reach Us", "Customer Support", "info@abs.com"];
const followUs = [
	{
		altName: "facebook",
		href: "https://www.facebook.com/",
		image: "/images/facebook.png",
	},
	{
		altName: "instagram",
		href: "https://www.instagram.com/",
		image: "/images/instagram.png",
	},

	{
		altName: "pinterest",
		href: "https://in.pinterest.com/",
		image: "/images/pinterest.png",
	},
];

const Footer = () => {
	return (
		<div className="w-full bg-black text-white relative flex flex-col py-[40px] md:py-[60px] gap-4">
			{/* <div >Image</div> */}
			<div className="flex flex-row items-center mx-[10%] gap-3">
				<div className="h-[30px] w-[30px] relative">
					<Image src="/images/logo-light.png" fill alt="light-logo" />
				</div>
				<div>
					<p className="text-[20px] font-[700]">AB Solutions Pvt. Ltd.</p>
				</div>
			</div>
			<div className="flex flex-row flex-wrap mx-[10%] gap-3 md:gap-[80px] justify-between md:justify-start">
				<div className="flex flex-col gap-2">
					{col1?.map((item) => (
						<p key={item}>{item}</p>
					))}
				</div>
				<div className="flex flex-col gap-2">
					{col2?.map((item) => (
						<p key={item}>{item}</p>
					))}
				</div>
				<div className="flex flex-col gap-2">
					{col3?.map((item) => (
						<p key={item}>{item}</p>
					))}
				</div>
				<div className="flex flex-col gap-2">
					<div>
						<p>Follow Us</p>
					</div>
					<div className="flex flex-row gap-3">
						{followUs?.map((item) => (
							<Link href={item?.href} key={item.altName} target="_blank">
								<Image
									src={item?.image}
									height={25}
									width={25}
									alt={item?.altName}
								/>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

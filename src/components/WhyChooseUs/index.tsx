/** @format */

import Link from "next/link";
import React from "react";

const reasons = [
	{
		text: "Expert Team with Industry Experience",
	},
	{
		text: "Solutions for Every Business Size",
	},
	{
		text: "Cost-Effective Strategies",
	},
	{
		text: "Scalable Services for Future Growth",
	},
];

const WhyChooseUS = () => {
	const SUB_TEXT = `Unlock your business's full potential with us. From branding to office setup, payroll management, and leadership hiring, we provide expert solutions tailored to your needs. With us, you'll get customized support, proven results, and a clear path to success. Let's take your business to the next level, together`;

	return (
		<div className="flex flex-col md:mx-[10%] items-center mt-5 gap-3 md:mt-[70px]">
			<div className="flex flex-col">
				<p className="font-[700] text-[28px] md:text-[40px] text-green-primary text-center">
					Why choose ABD Solutions
				</p>
				<p className="opacity-70 text-white text-center text-[14px] mt-[18px]">
					{SUB_TEXT}
				</p>
			</div>
			<div className="flex flex-col md:flex-row gap-2  mt-[40px] ">
				{reasons?.map((item) => (
					<div
						key={item.text}
						className="flex flex-col border p-3 border-white bg-white rounded-[12px] min-h-[80px] md:min-h-[100px] justify-center items-center relative mb-5 md:mb-0"
					>
						<div className="bg-green-primary absolute h-[40px] w-[40px] rounded-[50%] -top-[22px] "></div>
						<div className="mt-1">
							<p className="text-[14px] font-light text-center">{item?.text}</p>
						</div>
						<div>
							<Link href="">
								<p className="font-light underline">More</p>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default WhyChooseUS;

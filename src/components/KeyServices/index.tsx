/** @format */

import React from "react";
import servicesObj from "./servicesObj";
import Image from "next/image";

const KeyServices = () => {
	const TITLE = "Key Services";
	const SUB_TEXT = `Website content is information that is hosted on your website,
    presented through a variety of media. This can include bite-sized
    information like contact details, your company’s value propositions,
    and mission statement. It can also incorporate long-form content
    like blog posts that educate visitors and establish you as an
    authority in your industry.`;

	return (
		<div className="relative w-full h-full">
			<div className="bg-black text-white flex flex-col justify-center items-center px-2 py-[40px] -mt-[200px] rounded-md md:mx-[10%] md:p-[30px] md:-mt-[100px] ">
				<div className="w-full">
					<p className="text-[28px] md:text-[40px] font-[700] text-center">
						{TITLE}
					</p>
					<p className="text-center opacity-60">{SUB_TEXT}</p>
				</div>
				<div className="flex flex-row flex-wrap justify-center items-center w-full mt-[30px]">
					{servicesObj?.map((service) => (
						<div
							className="flex flex-col items-center gap-2 flex-[50%] md:flex-[25%] mt-[20px] md:mt-[30px]"
							key={service?.name}
						>
							<div className="relative h-[70px] w-[70px] rounded-[50%] border border-green-primary p-3">
								<Image
									src={service?.src}
									height={50}
									width={50}
									alt={service?.name}
								/>
							</div>
							<div>
								<p className="text-center">{service?.name}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default KeyServices;

/** @format */

import Image from "next/image";
import React from "react";

const MayIHelp = () => {
	const handleClick = () => {
		console.log("click");
	};
	return (
		<div className="rounded-[50%] h-[90px] w-[90px] md:h-[140px] md:w-[140px] relative">
			<button onClick={handleClick}>
				<Image src="/images/helpBot.png" fill alt="help-bot" />
			</button>
		</div>
	);
};

export default MayIHelp;

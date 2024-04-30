/** @format */

import React from "react";

interface Props {
	text: string;
	name: string;
}

const StoryCard = ({ text, name }: Props) => {
	const Avatar = () => (
		<div className="h-[40px] w-[40px] bg-black border border-green rounded-[50%] text-white flex items-center justify-center">
			{name[0]}
		</div>
	);

	return (
		<div
			className="min-w-[250px] flex flex-col border border-green-primary rounded-[12px] md:min-w-[300px] p-4 gap-2 relative justify-center items-center"
			key={name}
		>
			<div className="absolute top-[-20px] ">
				<Avatar />
			</div>
			<div className="text-white line-clamp-6 text-[14px] font-light text-center mt-2">
				{text}
			</div>
			<div className="text-green-primary">{name}</div>
		</div>
	);
};

export default StoryCard;

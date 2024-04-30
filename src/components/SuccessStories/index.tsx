/** @format */

import React from "react";
import Slider from "../Carousel";
import StoryCard from "./StoryCard";
import storiesObj from "./storiesObj";

const SuccessStories = () => {
	return (
		<div className="flex flex-col  md:mx-[10%] justify-center items-center mt-5 md:mt-[70px]">
			<div>
				<p className="text-white font-[700] text-[32px] ">
					Client Success Stories
				</p>
			</div>
			<div className="">
				<Slider>
					{storiesObj.map((story) => (
						// eslint-disable-next-line react/jsx-key
						<StoryCard name={story?.name} text={story?.text} />
					))}
				</Slider>
			</div>
		</div>
	);
};

export default SuccessStories;

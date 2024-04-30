/** @format */

import React, { Children, createRef, useEffect, useState } from "react";

interface Props {
	wrapperClass?: string;
	children: React.ReactNode;
}

const Slider = ({ wrapperClass, children }: Props) => {
	const target = createRef<HTMLDivElement>();
	const [currentScrollValue, setCurrentScrollValue] = useState<number>(0);

	const handleScroll = () => {
		if (!target.current) {
			return;
		}

		const element = target.current;
		const windowScroll = element.scrollLeft;

		setCurrentScrollValue(windowScroll);
	};

	useEffect(() => {
		target &&
			target.current &&
			target.current.addEventListener("scroll", handleScroll);
		return () => {
			target &&
				target.current &&
				target.current.removeEventListener("touchmove", handleScroll);
		};
	}, [target]);

	return (
		<div className="flex flex-col md:!min-w-[900px]">
			<div
				ref={target}
				className={`max-w-[100vw] md:!max-w-[900px]  ${wrapperClass} flex flex-row overflow-x-auto gap-3 p-2 py-6 md:justify-center`}
			>
				{children}
			</div>
			{/* <div className="flex flex-row  gap-2 text-white justify-center">
				<button onClick={() => handleScrollBTn("left")}>Left</button> |{" "}
				<button onClick={() => handleScrollBTn("right")}>Right</button>
			</div> */}
		</div>
	);
};

export default Slider;

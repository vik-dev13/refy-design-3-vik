/** @format */

import Image from "next/image";
import React from "react";
import DialogBox from "../DialogBox";
import ContactUsForm from "../ContactUsForm";

const MayIHelp = () => {
	const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);

	return (
		<div className="rounded-[50%] h-[90px] w-[90px] md:h-[140px] md:w-[140px] relative">
			<button onClick={() => setIsDialogOpen(true)}>
				<Image src="/images/helpBot.png" fill alt="help-bot" />
			</button>
			<DialogBox
				open={isDialogOpen}
				setIsOpen={setIsDialogOpen}
				title="Contact Us"
			>
				<ContactUsForm />
			</DialogBox>
		</div>
	);
};

export default MayIHelp;

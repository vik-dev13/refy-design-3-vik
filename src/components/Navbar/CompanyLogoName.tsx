/** @format */

import Image from "next/image";

const CompanyLogoName = () => {
	return (
		<div className="flex flex-row items-center gap-2">
			<div className="relative h-[30px] w-[30px]">
				<Image src="/images/logo.png" alt="logo" fill />
			</div>
			<p className="font-[600] text-black">AB Solutions Pvt. Ltd.</p>
		</div>
	);
};

export default CompanyLogoName;

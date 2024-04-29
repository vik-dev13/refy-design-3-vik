/** @format */

import HeroSection from "@/components/HeroSection";
import KeyServices from "@/components/KeyServices";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<div className="flex flex-col ">
			<Navbar />
			<HeroSection />
			<div className="flex bg-background-primary h-[600px]">
				<KeyServices />
			</div>
		</div>
	);
}

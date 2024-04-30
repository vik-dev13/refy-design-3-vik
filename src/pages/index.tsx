/** @format */

import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import KeyServices from "@/components/KeyServices";
import Navbar from "@/components/Navbar";
import SuccessStories from "@/components/SuccessStories";
import WhyChooseUS from "@/components/WhyChooseUs";

export default function Home() {
	return (
		<div className="flex flex-col ">
			<Navbar />
			<HeroSection />
			<div className="flex flex-col bg-background-primary ">
				<KeyServices />
				<WhyChooseUS />
				<SuccessStories />
				<Footer />
			</div>
		</div>
	);
}

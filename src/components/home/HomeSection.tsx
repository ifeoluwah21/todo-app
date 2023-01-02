import React from "react";
import hero from "../../assets/hero-logo.png";
import Button from "../UIs/Button";

const HomeSection: React.FC = () => {
	return (
		<section
			className={
				"font-exo text-gray-700 grid place-content-center min-w-full py-20 bg-gradient-to-bl from-pry-02 via-pry-02 to-pry-03"
			}>
			<img
				src={hero}
				alt="todo illustration"
				className="mx-auto mb-12 object-cover"
			/>
			<h1 className="font-bold text-2xl text-center mb-10">
				Design your TODOs
			</h1>
			<p className="text-base tracking-wider text-center mb-5">
				Make it easy to plan your everyday tasks and assignments. With Just few
				steps your are all set for the whole week, or a month. It is up to you.
			</p>
			<Button
				onClickHandler={(event) => {}}
				className="border-none capitalize"
				type={"button"}>
				Get Started
			</Button>
		</section>
	);
};

export default HomeSection;

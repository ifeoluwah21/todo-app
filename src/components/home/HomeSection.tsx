import React from "react";
import hero from "../../assets/hero-logo.png";
import Button from "../UIs/Button";
import { Link, useNavigate } from "react-router-dom";

const HomeSection: React.FC = () => {
	const navigate = useNavigate();
	return (
		<section
			className={
				"font-exo text-gray-700 grid place-content-center mx-auto w-80 py-20 "
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
				onClickHandler={(event) => {
					navigate("Auth", { replace: true });
				}}
				className="border-none capitalize"
				type={"button"}>
				Get Started
			</Button>
		</section>
	);
};

export default HomeSection;

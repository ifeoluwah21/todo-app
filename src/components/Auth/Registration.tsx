import React from "react";
import Input from "../UIs/Input";
import Button from "../UIs/Button";

const Registration: React.FC = () => {
	return (
		<section className="font-exo text-gray-700 text-center grid place-items-center min-w-full pt-36 pb-10 min-h-screen bg-gradient-to-bl from-pry-02 via-pry-02 to-pry-03">
			<h1 className="font-bold text-4xl mb-4">Wel Done!</h1>
			<p className="text-base lowercase mb-4">you're about to register now.</p>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-16 h-16 mb-4">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 19.5L8.25 12l7.5-7.5"
				/>
			</svg>

			<form className="w-80 sm:w-96 max-w-sm mx-auto flex flex-col flex-nowrap items-center">
				<Input
					type="text"
					placeholder="Enter full name here"
					label="full name"
				/>
				<Input
					type="text"
					placeholder="Enter email"
					label="email"
				/>
				<Input
					type="text"
					placeholder="Enter password"
					label="password"
				/>
				<Input
					type="text"
					placeholder="Confirm password"
					label="confirmPassword"
				/>
				<Button
					type="submit"
					className="max-w-sm w-3/4 "
					onClickHandler={(event) => {}}>
					Register
				</Button>
			</form>
			<span className="mt-4 tracking-wide">
				Already have an account?{" "}
				<a
					href="#"
					className="text-red-700 font-bold transition-colors duration-150 hover:text-red-900">
					Login
				</a>
			</span>
		</section>
	);
};

export default Registration;

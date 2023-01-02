import React from "react";
import Input from "../UIs/Input";

const Registration: React.FC = () => {
	return (
		<section className="font-exo text-gray-700 grid place-content-center min-w-full py-20 min-h-screen bg-gradient-to-bl from-pry-02 via-pry-02 to-pry-03">
			<form>
				<Input
					type="text"
					placeholder="Enter full name here"
				/>
			</form>
		</section>
	);
};

export default Registration;

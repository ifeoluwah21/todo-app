import React from "react";
import Input from "../UIs/Input";
import Button from "../UIs/Button";
import hero from "../../assets/login.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const onSubmitHandler: (event: React.FormEvent) => void = (event) => {
		navigate("../user");
	};
	return (
		<section className="font-exo text-gray-700 text-center grid place-items-center min-w-full pt-36 pb-10 min-h-screen bg-gradient-to-bl from-pry-02 via-pry-02 to-pry-02">
			<h1 className="font-bold text-4xl mb-4">Welcome !</h1>
			<img
				src={hero}
				alt="todo illustration"
				className="mx-auto mb-12 object-cover"
			/>
			<form
				onSubmit={onSubmitHandler}
				className="w-80 sm:w-96 max-w-sm mx-auto flex flex-col flex-nowrap items-center">
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
				<a
					href="#"
					className="text-blue-800 text-xs font-bold hover:text-blue-600 mb-6">
					forgotten password
				</a>
				<Button
					type="submit"
					className="max-w-sm w-3/4 "
					onClickHandler={(event) => {}}>
					Login
				</Button>
			</form>
			<span className="mt-4 tracking-wide">
				don't have an account?{" "}
				<Link
					to={"../register"}
					className="text-red-700 font-bold transition-colors duration-150 hover:text-red-900">
					Register
				</Link>
			</span>
		</section>
	);
};

export default Login;

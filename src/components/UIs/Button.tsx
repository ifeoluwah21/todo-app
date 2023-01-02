import React, { ButtonHTMLAttributes, ReactNode } from "react";
import "../../index.css";

const Button: React.FC<{
	children?: ReactNode;
	type: "button" | "reset" | "submit" | undefined;
	className?: string;
	onClickHandler: (event: React.MouseEvent) => void;
}> = (props) => {
	return (
		<button
			type={props.type || "button"}
			onClick={props.onClickHandler}
			className={`${props.className} rounded-lg bg-blue-700 text-base font-semibold text-white px-6 py-3 text-center transition-colors duration-200 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none`}>
			{props.children}
		</button>
	);
};

export default Button;

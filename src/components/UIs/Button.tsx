import React, { ReactNode } from "react";
import "../../index.css";

const Button: React.FC<{
	children?: ReactNode;
	type: "button" | "submit" | "reset" | undefined;
	className: string;
	onClickHandler: (event: React.MouseEvent) => void;
}> = (props) => {
	return (
		<button
			type={props.type || "button"}
			onClick={props.onClickHandler}
			className={`${props.className} rounded-lg bg-blue-700 text-base text-white px-6 py-3 text-center`}>
			{props.children}
		</button>
	);
};

export default Button;

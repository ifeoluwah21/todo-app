import React, { useRef } from "react";

const Input: React.FC<{
	type: React.HTMLInputTypeAttribute;
	placeholder: string;
}> = React.forwardRef((props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<input
			ref={inputRef}
			type={props.type}
			placeholder={props.placeholder}
			className={"rounded-full w-3/4 px-5 py-1"}
			required
		/>
	);
});

export default Input;

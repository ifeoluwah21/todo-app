import React, { HTMLInputTypeAttribute, useRef } from "react";

const Input: React.FC<{
	type: React.HTMLInputTypeAttribute;
	placeholder: string;
	label: string;
}> = React.forwardRef<
	HTMLInputElement,
	{
		type: React.HTMLInputTypeAttribute;
		placeholder: string;
		label: string;
	}
>((props, ref) => {
	return (
		<>
			<label
				htmlFor={props.label}
				className="hidden">
				{props.label}
			</label>
			<input
				ref={ref}
				id={props.label}
				type={props.type}
				placeholder={props.placeholder}
				className={
					"rounded-full w-3/4 max-w-sm mx-auto pl-8 py-2 mb-6 text-base placeholder:text-base placeholder:tracking-widest placeholder-slate-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
				}
				required
			/>
		</>
	);
});

export default Input;

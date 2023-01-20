import React from 'react';

const TextArea = (props: any, ref: any) => {
	return (
		<>
			<label
				htmlFor={props.label}
				className="hidden">
				{props.label}
			</label>
			<textarea
				name={props.label}
				id={props.label}
				cols={30}
				rows={10}
				ref={ref}
				placeholder="Task description"
				className={
					'rounded-md block w-3/4 max-w-sm mx-auto pl-8 py-2 mb-6 text-base placeholder:text-base placeholder:tracking-widest placeholder-slate-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
				}
				required
			/>
		</>
	);
};

export default React.forwardRef(TextArea);

import React from "react";

const Clock: React.FC<{
	img: string | undefined;
}> = (props) => {
	return (
		<figure className="w-full flex flex-col-reverse sm:flex-col gap-2 py-8 px-4 sm:px-8 justify-center items-center">
			<img
				src={props.img}
				alt="Clock"
				className="w-24"
			/>
			<figcaption className="text-base text-blue-700 tracking-wide font-bold self-end sm:self-center ">
				Good afternoon
			</figcaption>
		</figure>
	);
};

export default Clock;

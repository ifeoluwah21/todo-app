import React from "react";

const Clock: React.FC<{
	img: string | undefined;
}> = (props) => {
	const getTime = () => {
		let currentTime: Date = new Date();
		let currentHour: number = currentTime.getHours();
		if (currentHour >= 3 && currentHour < 12) return "Good Morning";
		else if (currentHour >= 12 && currentHour < 4) return `Good Afternoon`;
		else if (currentHour >= 4 && currentHour > 7) return "Good Evening";
		else return "Good Night";
	};
	return (
		<figure className="w-full flex flex-col-reverse sm:flex-col gap-2 py-8 px-4 sm:px-8 justify-center items-center">
			<img
				src={props.img}
				alt="Clock"
				className="w-24"
				width={"96"}
			/>
			<figcaption className="text-base text-blue-700 tracking-wide font-bold self-end sm:self-center ">
				{getTime()}
			</figcaption>
		</figure>
	);
};

export default Clock;

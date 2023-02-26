import React from 'react';
import { motion } from 'framer-motion';
import { childVariant } from '../../api/animate';

interface Prop {
	img: string | undefined;
}

const Clock: React.FC<Prop> = (props) => {
	const getTime = () => {
		let currentTime: Date = new Date();
		let currentHour: number = currentTime.getHours();

		if (currentHour >= 3 && currentHour < 12) {
			return 'Good Morning';
		} else if (currentHour >= 12 && currentHour < 16) {
			return `Good Afternoon`;
		} else if (currentHour >= 16 && currentHour < 19) {
			return 'Good Evening';
		} else {
			return 'Good Night';
		}
	};

	return (
		<motion.figure
			variants={childVariant}
			initial={'hidden'}
			animate={'visible'}
			className="w-full flex flex-col-reverse sm:flex-col gap-2 py-8 px-4 sm:px-8 justify-center items-center">
			<motion.img
				variants={childVariant}
				src={props.img}
				alt="Clock"
				className="w-24"
				width={'96'}
			/>
			<motion.figcaption
				variants={childVariant}
				className="text-base text-blue-700 tracking-wide font-bold self-end sm:self-center ">
				{getTime()}
			</motion.figcaption>
		</motion.figure>
	);
};

export default Clock;

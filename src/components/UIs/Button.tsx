import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import '../../index.css';

const Button: React.FC<{
	children?: ReactNode;
	type: 'button' | 'reset' | 'submit' | undefined;
	className?: string;
	onClickHandler: (event: React.MouseEvent) => void;
}> = (props) => {
	return (
		<motion.button
			whileHover={{
				scale: 1.1,
				boxShadow: '0 0 8px rgb(29 78 216 )',
				textShadow: '0 0 8px rgb(255 255 255)',
			}}
			transition={{
				type: 'spring',
				stiffness: 120,
			}}
			type={props.type || 'button'}
			onClick={props.onClickHandler}
			className={`${props.className} rounded-lg bg-blue-700 text-base font-semibold text-white px-6 py-3 text-center transition-colors duration-200 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none`}>
			{props.children}
		</motion.button>
	);
};

export default Button;

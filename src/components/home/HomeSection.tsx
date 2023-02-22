import React from 'react';
import hero from '../../assets/hero-logo.png';
import Button from '../UIs/Button';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const containerVariant = {
	hidden: {
		x: '150vw',
	},
	visible: {
		x: '0vw',
		transition: {
			delay: 0.2,
			type: 'spring',
			stiffness: 120,
			mass: 0.4,
			damping: 8,
			when: 'beforeChildren',
			staggerChildren: 2,
		},
	},
};
const titleVariant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

const HomeSection: React.FC = () => {
	const navigate = useNavigate();
	return (
		<motion.section
			variants={containerVariant}
			initial={'hidden'}
			animate={'visible'}
			className={
				'font-exo text-gray-700 grid place-content-center mx-auto w-80 py-20 '
			}>
			<img
				src={hero}
				alt="todo illustration"
				className="mx-auto mb-12 object-cover"
				width={'207'}
				height={'210'}
			/>
			<motion.h1
				variants={titleVariant}
				className="font-bold text-2xl text-center mb-10">
				Design your TODOs
			</motion.h1>
			<p className="text-base tracking-wider text-center mb-5">
				Make it easy to plan your everyday tasks and assignments. With Just few
				steps your are all set for the whole week, or a month. It is up to you.
			</p>
			<Button
				onClickHandler={(event) => {
					navigate('login', { replace: true });
				}}
				className="border-none capitalize"
				type={'button'}>
				Get Started
			</Button>
		</motion.section>
	);
};

export default HomeSection;

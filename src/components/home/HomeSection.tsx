import React from 'react';
import hero from '../../assets/hero-logo.png';
import Button from '../UIs/Button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { childVariant, containerVariant } from '../../api/animate';

const HomeSection: React.FC = () => {
	const navigate = useNavigate();
	return (
		<motion.section
			variants={containerVariant}
			initial={'hidden'}
			animate={'visible'}
			exit={'exit'}
			className={
				'font-exo text-gray-700 grid place-content-center mx-auto w-80 py-20 '
			}>
			<motion.img
				variants={childVariant}
				src={hero}
				alt="todo illustration"
				className="mx-auto mb-12 object-cover"
				width={'207'}
				height={'210'}
			/>
			<motion.h1
				exit={'exit'}
				variants={childVariant}
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

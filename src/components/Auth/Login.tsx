import React, { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import Input from '../UIs/Input';
import Button from '../UIs/Button';
import hero from '../../assets/login.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { userAuth } from '../../store/UserAuth';
import { childrenVariant, loginContainerVariant } from '../../api/animate';

const Login: React.FC = () => {
	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);
	const { signWithGoogle, login, user } = userAuth();
	const navigate = useNavigate();

	const onSubmitHandler = async (event: React.FormEvent): Promise<void> => {
		event.preventDefault();
		const enteredEmail = emailInputRef.current!.value.trim();
		const enteredPassword = passwordInputRef.current!.value.trim();
		if (
			!enteredEmail.includes('@') ||
			enteredEmail.length <= 6 ||
			enteredPassword.length <= 6
		) {
			return;
		}

		const result = await login(enteredEmail, enteredPassword);
		if (!result.errorMessage) {
			navigate(`../user/${result.uid}`);
		}
		console.log(result);
	};
	const onLoginWithGoogleHandler = async (
		event: React.MouseEvent
	): Promise<void> => {
		const result = await signWithGoogle();
		if (!result.errorMessage) {
			navigate(`../user/${result.uid}`);
		}
		console.log(result);
	};
	return (
		<motion.section
			variants={loginContainerVariant}
			initial={'hidden'}
			animate={'visible'}
			className="font-exo text-gray-700 text-center grid place-items-center min-w-full pt-36 pb-10 min-h-screen">
			<h1 className="font-bold text-4xl mb-4">Welcome !</h1>
			<motion.img
				variants={childrenVariant}
				src={hero}
				alt="todo illustration"
				className="mx-auto mb-12 object-cover"
				width={'210'}
				height={'210'}
			/>
			<motion.form
				variants={childrenVariant}
				onSubmit={onSubmitHandler}
				className="w-80 sm:w-96 max-w-sm mx-auto flex flex-col flex-nowrap items-center">
				<Input
					type="email"
					placeholder="Enter Your Email"
					label="email"
					ref={emailInputRef}
				/>
				<Input
					type="password"
					placeholder="Enter password"
					label="password"
					ref={passwordInputRef}
				/>
				<a
					href="#"
					className="text-blue-800 text-xs font-bold hover:text-blue-600 mb-6">
					forgotten password
				</a>
				<Button
					type="submit"
					className="max-w-sm w-3/4 "
					onClickHandler={(event) => {}}>
					Login
				</Button>
				<Button
					type="button"
					className="mt-4 max-w-sm w-3/4 flex justify-center items-center gap-2"
					onClickHandler={onLoginWithGoogleHandler}>
					<span>Login with</span>{' '}
					<Icon
						className="text-2xl"
						icon="flat-color-icons:google"
					/>
				</Button>
			</motion.form>
			<span className="mt-4 tracking-wide">
				don't have an account?{' '}
				<Link
					to={'../register'}
					className="text-red-700 font-bold transition-colors duration-150 hover:text-red-900">
					Register
				</Link>
			</span>
		</motion.section>
	);
};

export default Login;

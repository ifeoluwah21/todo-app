import React, { useRef } from 'react';
import Input from '../UIs/Input';
import Button from '../UIs/Button';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { userAuth } from '../../store/UserAuth';

const Registration: React.FC = () => {
	const fullnameInputRef = useRef<HTMLInputElement>(null);
	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);
	const confirmPasswordInputRef = useRef<HTMLInputElement>(null);
	const { signUp, signWithGoogle } = userAuth();
	const navigate = useNavigate();

	const onLoginWithGoogleHandler = async (
		event: React.MouseEvent
	): Promise<void> => {
		const result = await signWithGoogle();
		if (!result.errorMessage) {
			navigate(`../user/${result.uid}`);
		}
		console.log(result);
	};
	const onSubmitHandler = async (event: React.FormEvent): Promise<void> => {
		event.preventDefault();
		const enteredName = fullnameInputRef.current!.value.trim();
		const enteredEmail = emailInputRef.current!.value.trim();
		const enteredPassword = passwordInputRef.current!.value.trim();
		const enteredConfirmPassword =
			confirmPasswordInputRef.current!.value.trim();
		if (enteredName.length === 0) {
			return;
		}
		if (enteredEmail.length === 0) {
			return;
		}
		if (enteredPassword.length <= 6) {
			return;
		}
		if (enteredConfirmPassword.length <= 6) {
			return;
		}
		if (enteredConfirmPassword !== enteredPassword) {
			return;
		}
		console.log(
			`Name is ${enteredName}, email is ${enteredEmail}, password is ${enteredPassword} confirm password is ${enteredConfirmPassword}`
		);
		console.log('submitted');
		const result = await signUp(enteredEmail, enteredPassword);
		if (!result.errorMessage) {
			navigate(`../user/${result.uid}`);
		}
		console.log(result);
	};
	return (
		<section className="font-exo text-gray-700 text-center grid place-items-center min-w-full pt-36 pb-10 bg-gradient-to-bl from-pry-02 via-pry-02 to-pry-03">
			<h1 className="font-bold text-4xl mb-4">Wel Done!</h1>
			<p className="text-base lowercase mb-4">you're about to register now.</p>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-16 h-16 mb-4">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 19.5L8.25 12l7.5-7.5"
				/>
			</svg>

			<form
				onSubmit={onSubmitHandler}
				className="w-80 sm:w-96 max-w-sm mx-auto flex flex-col flex-nowrap items-center">
				<Input
					type="text"
					placeholder="Enter full name here"
					label="full name"
					ref={fullnameInputRef}
				/>
				<Input
					type="email"
					placeholder="Enter email"
					label="email"
					ref={emailInputRef}
				/>
				<Input
					type="password"
					placeholder="Enter password"
					label="password"
					ref={passwordInputRef}
				/>
				<Input
					type="password"
					placeholder="Confirm password"
					label="confirmPassword"
					ref={confirmPasswordInputRef}
				/>
				<Button
					type="submit"
					className="max-w-sm w-3/4 "
					onClickHandler={(event) => {}}>
					Register
				</Button>
				<Button
					type="button"
					className="mt-4 max-w-sm w-3/4 flex justify-center items-center gap-2"
					onClickHandler={onLoginWithGoogleHandler}>
					<span>Register with</span>{' '}
					<Icon
						className="text-2xl"
						icon="flat-color-icons:google"
					/>
				</Button>
			</form>
			<span className="mt-4 tracking-wide">
				Already have an account?{' '}
				<Link
					to="../login"
					className="text-red-700 font-bold transition-colors duration-150 hover:text-red-900">
					Login
				</Link>
			</span>
		</section>
	);
};

export default Registration;

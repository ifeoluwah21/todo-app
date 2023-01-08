import React, { useRef } from 'react';
import Input from '../UIs/Input';
import Button from '../UIs/Button';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider } from '../../api/firebase';
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth';
import { Icon } from '@iconify/react';

const Registration: React.FC = () => {
	const fullnameInputRef = useRef<HTMLInputElement>(null);
	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);
	const confirmPasswordInputRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	const signUpWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential?.accessToken;
				// The signed-in user info.
				const user = result.user;
				console.log(token, user);
				navigate(`../user/${user.uid}`);
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};

	const onSubmitHandler: (event: React.FormEvent) => void = (event) => {
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
		createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				navigate(`../user/${user.uid}`);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(error);
				// ..
			});
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
					onClickHandler={(event) => {
						signUpWithGoogle();
					}}>
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

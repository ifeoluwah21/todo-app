import React, { useRef } from 'react';
import Input from '../UIs/Input';
import Button from '../UIs/Button';
import hero from '../../assets/login.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth, provider } from '../../api/firebase';
import {
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth';
import { Icon } from '@iconify/react';

const Login: React.FC = () => {
	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential?.accessToken;
				// The signed-in user info.
				const user = result.user;
				console.log(token, user);
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
		const enteredEmail = emailInputRef.current!.value.trim();
		const enteredPassword = passwordInputRef.current!.value.trim();
		if (
			!enteredEmail.includes('@') ||
			enteredEmail.length <= 6 ||
			enteredPassword.length <= 6
		) {
			return;
		}
		signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
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
			});
		// sign();
	};
	return (
		<section className="font-exo text-gray-700 text-center grid place-items-center min-w-full pt-36 pb-10 min-h-screen bg-gradient-to-bl from-pry-02 via-pry-02 to-pry-02">
			<h1 className="font-bold text-4xl mb-4">Welcome !</h1>
			<img
				src={hero}
				alt="todo illustration"
				className="mx-auto mb-12 object-cover"
				width={'210'}
				height={'210'}
			/>
			<form
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
					onClickHandler={(event) => {
						signInWithGoogle();
					}}>
					<span>Login with</span>{' '}
					<Icon
						className="text-2xl"
						icon="flat-color-icons:google"
					/>
				</Button>
			</form>
			<span className="mt-4 tracking-wide">
				don't have an account?{' '}
				<Link
					to={'../register'}
					className="text-red-700 font-bold transition-colors duration-150 hover:text-red-900">
					Register
				</Link>
			</span>
		</section>
	);
};

export default Login;

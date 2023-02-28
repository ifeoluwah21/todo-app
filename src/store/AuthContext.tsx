import {
	Auth,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth';
import { auth, provider } from '../api/firebase';
import React, { ReactNode, useState } from 'react';

export const authContext = React.createContext({
	user: auth.currentUser,
	login: async (email: string, password: string): Promise<any> => '',
	signUp: async (email: string, password: string): Promise<any> => {},
	signOut: (auth: Auth): void => {},
	signWithGoogle: async (): Promise<any> => {},
});

const AuthContextProvider: React.FC<{ children?: ReactNode }> = (props) => {
	const [user, setUser] = useState(auth.currentUser);
	const login = async (email: string, password: string): Promise<any> => {
		let result: any;
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;
			setUser(user);
			result = user;
		} catch (e: any) {
			const errorCode = e.code;
			const errorMessage = e.message;
			result = { errorCode, errorMessage };
		}
		return result;
	};
	const signUp = async (email: string, password: string): Promise<any> => {
		let result: any;
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;
			setUser(user);
			result = user;
		} catch (error: any) {
			const errorCode = error.code;
			const errorMessage = error.message;
			result = { errorCode, errorMessage };
		}
		return result;
	};
	const signOut = () => {
		setUser(null);
	};
	const signWithGoogle = async (): Promise<any> => {
		let value: any;
		try {
			const result = await signInWithPopup(auth, provider);
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential!.accessToken;
			const user = result.user;
			value = user;
			setUser(user);
		} catch (error: any) {
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.customData.email;
			const credential = GoogleAuthProvider.credentialFromError(error);
			value = { errorCode, errorMessage, email, credential };
		}
		return value;
	};
	return (
		<authContext.Provider
			value={{ login, user, signUp, signOut, signWithGoogle }}>
			{props.children}
		</authContext.Provider>
	);
};

export default AuthContextProvider;

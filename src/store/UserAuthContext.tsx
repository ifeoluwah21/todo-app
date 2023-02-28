import {
	Auth,
	GoogleAuthProvider,
	User,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth';
import {
	FC,
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';
import { auth, provider } from '../api/firebase';
import { useNavigate } from 'react-router-dom';

//Types Definitions
interface Props {
	children?: ReactNode;
}
interface UseContext {
	user: User | null;
	signOut: () => void;
	signInWithGoogle: () => void;
	signInWithEmail: (email: string, password: string) => void;
	signUpWithEmail: (email: string, password: string) => void;
}

// Creating the userAuth Context
export const userAuthContext = createContext<UseContext>({
	user: auth.currentUser,
	signOut() {},
	signInWithEmail(email: string, password: string) {},
	signUpWithEmail(email: string, password: string) {},
	signInWithGoogle() {},
});

//UserAuthProvider Component
export const UserAuthProvider: FC<Props> = ({ children }) => {
	//currentUser state
	const [user, setUser] = useState(auth.currentUser);
	const navigate = useNavigate();

	//Sign-in with google provider
	const signInWithGoogle = async () => {
		try {
			const result = await signInWithPopup(auth, provider);
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential?.accessToken;
			// The signed-in user info.
			const user = result.user;
			// IdP data available using getAdditionalUserInfo(result)
		} catch (error: any) {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.customData.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
		}
	};

	//sign-Up with email and password
	const signUpWithEmail = async (email: string, password: string) => {
		try {
			const userCredentials = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredentials.user;
		} catch (error: any) {
			const errorCode = error.code;
			const errorMessage = error.message;
		}
	};

	//sign-In with email and password
	const signInWithEmail = async (email: string, password: string) => {
		try {
			const userCredentials = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredentials.user;
		} catch (error: any) {
			const errorCode = error.code;
			const errorMessage = error.message;
		}
	};

	const signOut = async () => {
		try {
			await signOut();
			console.log("You've successfully logged out!!!");
		} catch (error) {
			console.log(error);
		}
	};
	//UseEffect hook to get userState after signIn
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log('AuthState listener', currentUser);
			if (currentUser) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = currentUser.uid;
				// ...
				navigate(`/user/${uid}`);
				setUser(currentUser);
			} else {
				// User is signed out
				// ...
				setUser(null);
			}
		});

		//return unsubscribe();
	}, []);

	return (
		<userAuthContext.Provider
			value={{
				user,
				signInWithGoogle,
				signInWithEmail,
				signUpWithEmail,
				signOut,
			}}>
			{children}
		</userAuthContext.Provider>
	);
};

//Custom User Authentication hook;
export const userAuth = () => {
	return useContext(userAuthContext);
};

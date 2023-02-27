// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signInWithPopup,
} from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import {
	getFirestore,
	collection,
	getDocs,
	doc,
	setDoc,
	updateDoc,
	getDoc,
	arrayUnion,
} from 'firebase/firestore';

export const provider = new GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
	login_hint: 'user@example.com',
});

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBk79MnTPIho9qvkSNRn_7MtqcCjoyIRPg',
	authDomain: 'todo-app-e449b.firebaseapp.com',
	projectId: 'todo-app-e449b',
	storageBucket: 'todo-app-e449b.appspot.com',
	messagingSenderId: '944211147263',
	appId: '1:944211147263:web:550c4de7a9b60a5f9a4fca',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
auth.languageCode = 'it';

export async function signIn(email, password) {
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			console.log(user);
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(error);
		});
}

onAuthStateChanged(auth, (user) => {
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		const uid = user.uid;
		// ...
	} else {
		// User is signed out
		// ...
	}
});
export function sign() {
	signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
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
}

//Initialize Firestore
const db = getFirestore(app);

//Collection Reference
export const colRef = collection(db, 'todos');

//Get docs
export async function getUserDoc(userId) {
	let todos;
	const docSnapshot = await getDoc(doc(colRef, userId));
	if (docSnapshot.exists()) {
		todos = docSnapshot.data();
		console.log(docSnapshot.data());
		return todos;
	} else {
		initUserDoc(userId);
		todos = { userId, tasks: [] };
	}

	return todos;
}

//Adding document
export async function initUserDoc(userId) {
	await setDoc(doc(colRef, userId), {
		tasks: [],
		userId,
	});
}

export async function updateUserDoc(userId, updatedData) {
	await updateDoc(doc(colRef, userId), {
		tasks: arrayUnion(updatedData),
	});
}

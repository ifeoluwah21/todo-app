import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../api/firebase';

interface Prop {
	name: string;
	img: string | undefined;
}
const Profile: React.FC<Prop> = (props) => {
	return (
		<figure className="font-exo bg-blue-700 w-full flex flex-col items-center pt-36 bg-hero-pattern bg-no-repeat bg-left-top">
			<img
				src={props.img}
				alt={props.name}
				className="w-32 sm:w-40 rounded-full"
				width={'160'}
			/>
			<figcaption className="text-slate-50 text-base text-center capitalize mt-2">
				Welcome {props.name}
			</figcaption>
			<Link
				onClick={(event) => {
					// event.preventDefault();
					signOut(auth)
						.then((user) => user)
						.catch((e) => console.log(e, 'error'));
				}}
				to="../home"
				className="text-slate-50 text-sm font-bold hover:text-slate-300 mt-2 mb-4">
				logout
			</Link>
		</figure>
	);
};

export default Profile;

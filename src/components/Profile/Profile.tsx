import React from "react";
import { Link } from "react-router-dom";

const Profile: React.FC<{
	name: string;
	img: string | undefined;
}> = (props) => {
	return (
		<figure className="font-exo bg-blue-700 w-full flex flex-col items-center pt-36 bg-hero-pattern bg-no-repeat bg-left-top">
			<img
				src={props.img}
				alt={props.name}
				className="w-32 sm:w-40"
				width={"160"}
			/>
			<figcaption className="text-slate-50 text-base text-center capitalize mt-2">
				Welcome {props.name}
			</figcaption>
			<Link
				to="../home"
				className="text-slate-50 text-sm font-bold hover:text-slate-300 mt-2 mb-4">
				logout
			</Link>
		</figure>
	);
};

export default Profile;

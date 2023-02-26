import React from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout: React.FC = () => {
	return (
		<main className="bg-hero-pattern min-h-screen w-full font-exo bg-no-repeat bg-left-top">
			<Outlet />
		</main>
	);
};

export default RootLayout;

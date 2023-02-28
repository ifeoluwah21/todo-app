import React from 'react';
import { Outlet } from 'react-router-dom';
import { UserAuthProvider } from '../store/UserAuthContext';

const RootLayout: React.FC = () => {
	return (
		<main className="bg-hero-pattern min-h-screen w-full font-exo bg-no-repeat bg-left-top">
			<UserAuthProvider>
				<Outlet />
			</UserAuthProvider>
		</main>
	);
};

export default RootLayout;

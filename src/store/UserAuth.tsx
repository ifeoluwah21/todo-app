import React, { useContext } from 'react';
import { authContext } from './AuthContext';

const userAuth = () => {
	return useContext(authContext);
};

export { userAuth };

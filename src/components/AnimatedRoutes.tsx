import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import UserTodos from '../Pages/UserTodos';
import AddTodo from '../Pages/AddTodo';

const AnimatedRoutes = () => {
	const location = useLocation();
	return <AnimatePresence></AnimatePresence>;
};

export default AnimatedRoutes;

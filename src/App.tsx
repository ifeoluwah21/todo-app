import './App.css';
import Login from './components/Auth/Login';
import {
	Navigate,
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Home from './Pages/Home';
import RootLayout from './Pages/RootLayout';
import UserTodos from './Pages/UserTodos';
import Register from './Pages/Register';
import AuthContextProvider from './store/AuthContext';
import AddTodo from './Pages/AddTodo';
import { userAuth } from './store/UserAuth';
import { User, onAuthStateChanged } from 'firebase/auth';
import { TodoItemLoader } from './components/Todos/TodoItem';
import { auth } from './api/firebase';
import { useEffect, useState } from 'react';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path="/"
				element={<RootLayout />}>
				<Route
					path={'home'}
					element={
						<Navigate
							to={'/'}
							replace={true}
						/>
					}
				/>
				<Route
					index
					element={<Home />}
				/>

				<Route
					path="register"
					element={<Register />}
				/>

				<Route
					path="login"
					element={<Login />}
				/>

				<Route
					path="user/:userId"
					element={<UserTodos />}
					loader={TodoItemLoader}
				/>
				<Route
					path="*"
					element={<Navigate to={'/'} />}
				/>
				<Route
					path="/user/:userId/addTodo"
					element={<AddTodo />}
				/>
			</Route>
		)
	);
	return (
		// <main className="bg-hero-pattern font-exo bg-no-repeat bg-left-top">
		// 	{/* <Button
		// 		onClickHandler={(event) => {}}
		// 		className="border-none"
		// 		type={"button"}>
		// 		Click
		// 	</Button> */}
		// 	{/* <HomeSection /> */}
		// 	{/* <Registration /> */}
		// 	{/* <Login /> */}
		// 	<Profile
		// 		img={img}
		// 		name={"Ifeoluwa"}
		// 	/>
		// 	<Wrapper>
		// 		<Clock img={clock} />
		// 		<TodoList />
		// 	</Wrapper>
		// </main>
		<AuthContextProvider>
			<RouterProvider router={router} />
		</AuthContextProvider>
	);
}

export default App;

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
import { auth } from './api/firebase';
import AddTodo from './Pages/AddTodo';
import { userAuth } from './store/UserAuth';
import { User } from 'firebase/auth';

function App() {
	const { user }: { user: User | null } = userAuth();
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
				/>
				<Route
					path="*"
					element={<Navigate to={'/'} />}
				/>
				<Route
					path="addTodo"
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

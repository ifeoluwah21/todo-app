import './App.css';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import Profile from './components/Profile/Profile';
import Button from './components/UIs/Button';
import HomeSection from './components/home/HomeSection';
import img from './assets/avatar.png';
import Clock from './components/UIs/Clock';
import clock from './assets/clock.png';
import Wrapper from './components/UIs/Wrapper';
import TodoList from './components/Todos/TodoList';
import {
	Navigate,
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Home from './Pages/Home';
import Auth from './Pages/Register';
import RootLayout from './Pages/RootLayout';
import UserTodos from './Pages/UserTodos';
import Register from './Pages/Register';
import AuthContextProvider from './store/AuthContext';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<RootLayout />}>
			<Route
				path={'/home'}
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
				path="/register"
				element={<Register />}
			/>
			<Route
				path="/login"
				element={<Login />}
			/>
			<Route
				path="/user/:userId"
				element={<UserTodos />}
			/>
			<Route
				path="*"
				element={<Navigate to={'/'} />}
			/>
		</Route>
	)
);

function App() {
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

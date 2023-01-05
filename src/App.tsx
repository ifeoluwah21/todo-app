import "./App.css";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import Profile from "./components/Profile/Profile";
import Button from "./components/UIs/Button";
import HomeSection from "./components/home/HomeSection";
import img from "./assets/avatar.png";
import Clock from "./components/UIs/Clock";
import clock from "./assets/clock.png";
import Wrapper from "./components/UIs/Wrapper";
import TodoList from "./components/Todos/TodoList";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import RootLayout from "./Pages/RootLayout";
import UserTodos from "./Pages/UserTodos";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<RootLayout />}>
			<Route
				index
				element={<Home />}
			/>
			<Route
				path="auth"
				element={<Auth />}
			/>
			<Route
				path="user"
				element={<UserTodos />}
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
		<RouterProvider router={router} />
	);
}

export default App;

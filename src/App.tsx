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
import AddTodo from './Pages/AddTodo';
import { TodoItemLoader } from './components/Todos/TodoItem';

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
	return <RouterProvider router={router} />;
}

export default App;

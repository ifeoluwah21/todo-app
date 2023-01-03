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

function App() {
	return (
		<main className="bg-hero-pattern font-exo bg-no-repeat bg-left-top">
			{/* <Button
				onClickHandler={(event) => {}}
				className="border-none"
				type={"button"}>
				Click
			</Button> */}
			{/* <HomeSection /> */}
			{/* <Registration /> */}
			{/* <Login /> */}
			<Profile
				img={img}
				name={"Ifeoluwa"}
			/>
			<Wrapper>
				<Clock img={clock} />
				<TodoList />
			</Wrapper>
		</main>
	);
}

export default App;

import React from "react";
import Profile from "../components/Profile/Profile";
import Wrapper from "../components/UIs/Wrapper";
import img from "../assets/avatar.png";
import Clock from "../components/UIs/Clock";
import clock from "../assets/clock.png";
import TodoList from "../components/Todos/TodoList";

const UserTodos: React.FC = () => {
	return (
		<>
			<Profile
				img={img}
				name={"Ifeoluwa"}
			/>
			<Wrapper>
				<Clock img={clock} />
				<TodoList />
			</Wrapper>
		</>
	);
};

export default UserTodos;

import React from 'react';
import Profile from '../components/Profile/Profile';
import Wrapper from '../components/UIs/Wrapper';
import img from '../assets/avatar.png';
import Clock from '../components/UIs/Clock';
import clock from '../assets/clock.png';
import TodoList from '../components/Todos/TodoList';
import { userAuth } from '../store/UserAuthContext';

const UserTodos: React.FC = () => {
	const { user } = userAuth();
	return (
		<>
			<Profile
				img={user?.photoURL || img}
				name={user?.displayName || 'Ifeoluwa'}
			/>
			<Wrapper>
				<Clock img={clock} />
				<TodoList />
			</Wrapper>
		</>
	);
};

export default UserTodos;

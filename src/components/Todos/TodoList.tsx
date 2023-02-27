import React, { useContext } from 'react';
import { Todo } from '../../models/Todo';
import TodoItem from './TodoItem';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { listVariant, taskContainerVariant } from '../../api/animate';
import { authContext } from '../../store/AuthContext';

const TodoList: React.FC = () => {
	const navigate = useNavigate();
	const { user } = useContext(authContext);
	const addHandler = (event: React.MouseEvent) => {
		navigate(`/user/${user!.uid}/addTodo`);
	};
	return (
		<motion.section
			variants={taskContainerVariant}
			initial={'hidden'}
			animate={'visible'}
			className="w-11/12 max-w-md mx-auto">
			<h1 className="font-bold text-xl text-left text-blue-700 my-2 mx-auto px-4 w-80 sm:w-96 max-w-sm">
				Task List
			</h1>
			<div className="bg-white pb-10 pt-6 px-4 rounded-xl mb-12 max-h-80 overflow-y-scroll hide-scrollbar w-80 sm:w-96 max-w-sm mx-auto">
				<h2 className="font-bold text-xl text-left text-blue-700 pb-5 flex flex-row justify-between w-full">
					<span>Daily tasks</span>
					{user && user.uid && (
						<button onClick={addHandler}>
							<svg
								className="w-8 h-8 font-bold text-blue-700"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
							</svg>
						</button>
					)}
				</h2>
				<TodoItem />
			</div>
		</motion.section>
	);
};

export default TodoList;

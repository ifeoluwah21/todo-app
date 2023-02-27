import React, { useContext, useState } from 'react';
import { Task, Todo } from '../../models/Todo';
import { motion } from 'framer-motion';
import { itemVariant, listVariant } from '../../api/animate';
import { authContext } from '../../store/AuthContext';
import { getUserDoc } from '../../api/firebase';
import { useLoaderData } from 'react-router-dom';

// const DUMMYDATA: Todo[] = [
// 	{
// 		todo: 'Learning Reactjs',
// 		isDone: false,
// 		id: 'td1',
// 	},
// 	{
// 		todo: 'Learning Typescript',
// 		isDone: false,
// 		id: 'td2',
// 	},
// 	{
// 		todo: 'Learning Node',
// 		isDone: true,
// 		id: 'td3',
// 	},
// ];

const TodoItem: React.FC = () => {
	const { user } = useContext(authContext);
	const loadedData = useLoaderData() as Todo;
	const userTodos = loadedData.tasks;
	return (
		<motion.ul
			className="space-y-6"
			variants={listVariant}>
			{userTodos?.map((todo, index) => {
				return (
					<motion.li
						key={index}
						className="flex items-center"
						variants={itemVariant}
						initial={'hidden'}
						animate={'visible'}
						whileHover={'hover'}>
						<span
							className={`w-5 h-5 border-solid border-slate-800 border-2 inline-block transition-colors duration-150 ease-linear ${
								todo.isCompleted ? 'bg-blue-700' : ''
							}`}></span>{' '}
						<span className="text-blue-700 font-semibold text-base ml-3">
							{todo.title}
						</span>
					</motion.li>
				);
			})}
		</motion.ul>
	);
};

export default TodoItem;
export async function TodoItemLoader({ params }: any) {
	let todos: Todo;
	const { userId } = params;

	const data = (await getUserDoc(userId)) as Todo;
	todos = data;
	return todos;
}

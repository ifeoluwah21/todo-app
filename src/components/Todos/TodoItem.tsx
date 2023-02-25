import React from 'react';
import { Todo } from '../../models/Todo';
import { motion } from 'framer-motion';
import { itemVariant, listVariant } from '../../api/animate';

const DUMMYDATA: Todo[] = [
	{
		todo: 'Learning Reactjs',
		isDone: false,
		id: 'td1',
	},
	{
		todo: 'Learning Typescript',
		isDone: false,
		id: 'td2',
	},
	{
		todo: 'Learning Node',
		isDone: true,
		id: 'td3',
	},
];

const TodoItem: React.FC = () => {
	return (
		<motion.ul
			className="space-y-6"
			variants={listVariant}>
			{DUMMYDATA.map((todo) => {
				return (
					<motion.li
						key={todo.id}
						className="flex items-center"
						variants={itemVariant}
						initial={'hidden'}
						animate={'visible'}
						whileHover={'hover'}>
						<span
							className={`w-5 h-5 border-solid border-slate-800 border-2 inline-block transition-colors duration-150 ease-linear ${
								todo.isDone ? 'bg-blue-700' : ''
							}`}></span>{' '}
						<span className="text-blue-700 font-semibold text-base ml-3">
							{todo.todo}
						</span>
					</motion.li>
				);
			})}
		</motion.ul>
	);
};

export default TodoItem;

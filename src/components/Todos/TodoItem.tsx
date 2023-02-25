import React from 'react';
import { Todo } from '../../models/Todo';
import { motion } from 'framer-motion';

interface Prop {
	isDone: boolean;
	todo: string;
	id: string;
}

const TodoItem: React.FC<Prop> = (props) => {
	return (
		<motion.li
			className="flex items-center"
			whileHover={{
				scale: 1.15,
				originX: 0,
				type: 'spring',
			}}>
			<span
				className={`w-5 h-5 border-solid border-slate-800 border-2 inline-block transition-colors duration-150 ease-linear ${
					props.isDone ? 'bg-blue-700' : ''
				}`}></span>{' '}
			<span className="text-blue-700 font-semibold text-base ml-3">
				{props.todo}
			</span>
		</motion.li>
	);
};

export default TodoItem;

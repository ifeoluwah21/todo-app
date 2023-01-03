import React from "react";
import { Todo } from "../../models/Todo";

const TodoItem: React.FC<{
	isDone: boolean;
	todo: string;
	id: string;
}> = (props) => {
	return (
		<li className="flex items-center">
			<span
				className={`w-5 h-5 border-solid border-slate-800 border-2 inline-block transition-colors duration-150 ease-linear ${
					props.isDone ? "bg-blue-700" : ""
				}`}></span>{" "}
			<span className="text-blue-700 font-semibold text-base ml-3">
				{props.todo}
			</span>
		</li>
	);
};

export default TodoItem;

import React, { useRef } from 'react';
import Input from '../components/UIs/Input';
import Button from '../components/UIs/Button';
import TextArea from '../components/UIs/TextArea';

const AddTodo = () => {
	const todoInputRef = useRef<HTMLInputElement>(null);
	const descInputRef = useRef<HTMLInputElement>(null);
	const addTodoHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredTodoText = todoInputRef.current!.value.trim();
		if (enteredTodoText.length < 6) {
			return;
		}
	};
	return (
		<section className={'font-exo text-gray-700 grid mx-auto w-3/4 py-20 '}>
			<h1 className="font-bold text-2xl text-center mb-10 w-80 mx-auto">
				I know it would be a busy day, so add a task
			</h1>
			<form>
				<Input
					ref={todoInputRef}
					type={'text'}
					label="todo"
					placeholder="Task title"
				/>
				<TextArea
					ref={descInputRef}
					type={'text'}
					label="desc"
					placeholder="Task descprition"
				/>
				<Button
					onClickHandler={addTodoHandler}
					className="block mx-auto"
					type="submit">
					Add Task
				</Button>
			</form>
		</section>
	);
};

export default AddTodo;

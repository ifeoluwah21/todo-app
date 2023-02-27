import React, { useContext, useRef } from 'react';
import Input from '../components/UIs/Input';
import Button from '../components/UIs/Button';
import TextArea from '../components/UIs/TextArea';
import { authContext } from '../store/AuthContext';
import { updateUserDoc } from '../api/firebase';
import { useNavigate } from 'react-router-dom';

const AddTodo: React.FC = () => {
	const titleInputRef = useRef<HTMLInputElement>(null);
	const descInputRef = useRef<HTMLInputElement>(null);
	const { user } = useContext(authContext);
	const navigate = useNavigate();
	const addTodoHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredTodoTitle = titleInputRef.current!.value.trim();
		const enteredTodoDesc = descInputRef.current!.value.trim();
		if (enteredTodoTitle.length < 6 && enteredTodoDesc.length < 6) {
			return;
		}
		if (user && user.uid) {
			updateUserDoc(user.uid, {
				title: enteredTodoTitle,
				description: enteredTodoDesc,
				isCompleted: false,
			});
		}
		navigate(-1, { replace: true });
	};
	return (
		<section className={'font-exo text-gray-700 grid mx-auto w-3/4 py-20 '}>
			<h1 className="font-bold text-2xl text-center mb-10 w-80 mx-auto">
				I know it would be a busy day, so add a task
			</h1>
			<form>
				<Input
					ref={titleInputRef}
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

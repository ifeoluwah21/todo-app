export type Task = { title: string; description: string; isCompleted: boolean };
export class Todo {
	tasks: Task[];

	userId: string;
	constructor(todo: Task[], userId: string) {
		this.tasks = todo;
		this.userId = userId;
	}
}

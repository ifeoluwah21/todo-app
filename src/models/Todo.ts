export class Todo {
	todo: string;
	isDone: boolean;
	id: string;
	constructor(todo: string, isDone: boolean) {
		this.todo = todo;
		this.isDone = isDone;
		this.id = new Date().toISOString();
	}
}

export const requestGetTodo = () =>
	fetch('http://localhost:3005/todo')
		.then((response) => response.json())

export const requestDeleteTodo = (id) =>
	fetch(`http://localhost:3005/todo/${id}`, {
		method: 'DELETE',
	})
		.then((rawResponse) => rawResponse.json())

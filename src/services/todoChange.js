export const requestChangeTodo = ({title, completed, id}) =>
	fetch(`http://localhost:3005/todo/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title,
			completed,
		}),
	})
		.then((rawResponse) => rawResponse.json())

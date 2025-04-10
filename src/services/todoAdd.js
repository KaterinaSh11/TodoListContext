export const requestAddTodo = ({title, completed}) =>
	fetch('http://localhost:3005/todo', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title,
			completed,
		}),
	}).then((rawResponse) => rawResponse.json());

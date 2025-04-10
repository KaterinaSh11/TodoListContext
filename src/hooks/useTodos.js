import { useEffect, useState } from 'react';
import { requestGetTodo } from '../services/todoGet';
import { requestChangeTodo } from '../services/todoChange';
import { requestDeleteTodo } from '../services/todoDelete';
import { requestAddTodo } from '../services/todoAdd';

export const useTodos = () => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const [changinTaskID, setChangingTaskID] = useState(null);

	const [searchStr, setSearchStr] = useState(false);
	const [isSorted, setIsSorted] = useState(false);

	useEffect(() => {
		readTodos();
	}, []);

	const readTodos = async () => {
		setIsLoading(true);

		try {
			const data = await requestGetTodo();
			setTasks(data);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	const updateTodo = async (task) => {
		setIsLoading(true);

		try {
			const data = await requestChangeTodo(task);
			setTasks((prev) => prev.map((t) => (t.id === task.id ? data : t)));
		} catch (error) {
			console.log('А я на сервер не пошел')
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	const deleteTodo = async (taskId) => {
		setIsLoading(true);

		try {
			await requestDeleteTodo(taskId);
			setTasks((prev) => prev.filter((t) => t.id !== taskId));
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	const createTodo = async (task) => {
		setIsLoading(true);

		try {
			const data = await requestAddTodo(task);
			setTasks(prev => [...prev, data]);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	const filteredTasks = searchStr
		? tasks.filter((task) => task.title.includes(searchStr))
		: tasks;

	const sortedTodos = isSorted
		? filteredTasks.toSorted((a, b) => a.title.localeCompare(b.title))
		: filteredTasks;

	return {
		tasks: sortedTodos,
		isLoading,
		error,
		setError,
		searchStr,
		setSearchStr,
		isSorted,
		setIsSorted,
		updateTodo,
		deleteTodo,
		createTodo,
		changinTaskID,
		setChangingTaskID,
	};
};

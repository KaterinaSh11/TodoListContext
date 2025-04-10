import { TodoItem } from '../todoItem/TodoItem';
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../context';

export const TodoList = () => {
	const {tasks, isLoading} = useContext(AppContext);

	const [changeById, setChangeById] = useState(0);
	const [itemTitle, setItemTitle] = useState('');

	if(isLoading) return <p>Loading...</p>

	return (
		<>
			{tasks.map(({ id, title, completed }) => (
					<TodoItem
						id={id}
						title={title}
						completed={completed}
						changeById={changeById}
						setChangeById={setChangeById}
						itemTitle={itemTitle}
						setItemTitle={setItemTitle}
						key={id}
					/>
				))
			}
		</>
	);
};

import { AiTwotoneEdit } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Checkbox } from '../checkbox/Checkbox';
import styles from './TodoItem.module.css';
import { IoIosSave } from 'react-icons/io';
import { MdCancelPresentation } from 'react-icons/md';
import { useContext, useState } from 'react';
import { AppContext } from '../../context';

export const TodoItem = ({
	id,
	title,
	completed,
}) => {
	const {updateTodo, changinTaskID, setChangingTaskID, deleteTodo} = useContext(AppContext);

	const [updatingTitle, setUpdatingTitle] = useState(title);

	const handleSave = () => {
		if (updatingTitle.length !== 0) {
			updateTodo({title: updatingTitle, completed, id});
			setChangingTaskID(null);
		}
	};

	const handleComleted = () => {
		updateTodo({ id, title, completed: !completed });
	}

	return (
		<>
			{id === changinTaskID ? (
				<div className={styles['input-group']}>
					<input
						type="text"
						value={updatingTitle}
						onChange={({ target }) => setUpdatingTitle(target.value)}
					/>
					<button type="button" onClick={() => handleSave()}>
						<IoIosSave />
					</button>
					<button type="button" onClick={() => setChangingTaskID(null)}>
						<MdCancelPresentation />
					</button>
				</div>
			) : (
				<div className={styles.task}>
					<span>
						{title}
					</span>
					<Checkbox isChecked={completed} onChange={handleComleted} />
					<button type="button" onClick={() => setChangingTaskID(id)}>
						<AiTwotoneEdit/>
					</button>
					<button className={styles.delete} onClick={() => deleteTodo(id)}>
						<RiDeleteBin6Line />
					</button>
				</div>
			)}
		</>
	);
};

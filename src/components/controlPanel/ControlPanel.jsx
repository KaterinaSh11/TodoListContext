import { useState } from 'react';
import styles from './ControlPanel.module.css';
import { FaSortAlphaDown } from 'react-icons/fa';
import { TbFilterCancel } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { RiAddBoxLine } from 'react-icons/ri';
import { useContext } from 'react';
import { AppContext } from '../../context';

export const ControlPanel = () => {
	const {
		createTodo,
		setError,
		setSearchStr,
		setIsSorted,
		isSorted,
		error,
	} = useContext(AppContext);

	const [title, setTitle] = useState('');

	const addTodo = async (event) => {
		event.preventDefault();
		if (title.length < 1) {
			setError('Укажите задачу');
			return;
		} else {
			setError('');
		}
		await createTodo({ title, completed: false });
		setTitle('');
	};

	return (
		<>
			<form onSubmit={addTodo}>
				<div className={styles['input-group']}>
					<input
						type="text"
						placeholder="Добавить новую задачу"
						value={title}
						onChange={({ target }) => setTitle(target.value)}
					/>
					<button type="submit">
						<RiAddBoxLine /> Добавить
					</button>
				</div>
				<div className={styles['input-group']}>
					<input
						type="text"
						placeholder="поиск..."
						onChange={({ target }) => setSearchStr(target.value)}
					/>
				</div>
				<button type="button" onClick={() => setIsSorted(!isSorted)}>
					{isSorted ? (
						<>
							<TbFilterCancel /> Отменить
						</>
					) : (
						<>
							<FaSortAlphaDown /> Сортировать
						</>
					)}
				</button>
			</form>
			{error !== '' && <div className={styles.error}>{error}</div>}
		</>
	);
};

ControlPanel.propTypes = {
	error: PropTypes.string,
	isSorted: PropTypes.bool,
	setIsSorted: PropTypes.func.isRequired,
	tasks: PropTypes.array,
	setTasks: PropTypes.func.isRequired,
};

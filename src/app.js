import styles from './app.module.css';
import { ControlPanel } from './components/controlPanel/ControlPanel';
import { TodoList } from './components/todoList/TodoList';
import { AppContext } from './context';
import { useTodos } from './hooks/useTodos'

export const App = () => {
	const todoContext = useTodos();

	return (
		<AppContext value={todoContext}>
			<div className={styles.app}>
				<div className={styles.content}>
					<ControlPanel />
					<TodoList />
				</div>
			</div>
		</AppContext>
	);
};

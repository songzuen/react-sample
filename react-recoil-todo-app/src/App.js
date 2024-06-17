import { useRecoilValue } from 'recoil';
import './App.css';
import TodoItemCreator from './components/TodoItemCreator';
import { filteredTodoListState, todoListState } from './todoAtom';
import TodoItem from './components/TodoItem';
import TodoListFilters from './components/TodoListFilters';
import TodoListStatus from './components/TodoListStatus';

function App() {
	const todoList = useRecoilValue(todoListState)
	const filteredTodoList = useRecoilValue(filteredTodoListState)


	console.log('todoList', todoList)
	console.log('filteredTodoList', filteredTodoList)

	return (
		<div className='App'>
			<TodoListStatus />
			<TodoListFilters />
			<TodoItemCreator />
			{/* {todoList.map((todoItem) => { */}
			{filteredTodoList.map((todoItem) => (
				<TodoItem key={todoItem.id} item={todoItem} />
			))}
		</div>
	);
}

export default App;

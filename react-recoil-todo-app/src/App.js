import { useRecoilValue } from 'recoil';
import './App.css';
import TodoItemCreator from './components/TodoItemCreator';
import { filteredTodoListState, todoListState } from './todoAtom';
import TodoItem from './components/TodoItem';
import TodoListFilters from './components/TodoListFilters';
import TodoListStatus from './components/TodoListStatus';
import { currentUserNameQuery } from './userAtom';
import { Suspense } from 'react';

function App() {
	const todoList = useRecoilValue(todoListState)
	const filteredTodoList = useRecoilValue(filteredTodoListState)
	// console.log('todoList', todoList)
	// console.log('filteredTodoList', filteredTodoList)

	return (
		<div className='App'>
			<Suspense fallback={<div>Loading...</div>}>
				<CurrentUserInfo />
			</Suspense>
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

function CurrentUserInfo(){
	const userName = useRecoilValue(currentUserNameQuery)
	return <div>{userName}</div>
}

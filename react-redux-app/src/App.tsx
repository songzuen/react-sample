import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';
import { fetchPosts } from './actions/post';

type props = {
	// value : any;
	onIncrement : () => void;
	onDecrement : () => void;
}

interface Post {
	userId : number;
	id : number;
	title : string;
}

function App({onIncrement, onDecrement}:props) {
	const dispatch = useDispatch();

	const todos: string[] = useSelector((state:RootState) => state.todos)
	const counter = useSelector((state: RootState) => state.counter);
	const posts: Post[] = useSelector((state:RootState) => state.posts)

	const [todoValue, setTodoValue] = useState("")
	const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodoValue(e.target.value)
	}
	const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch({type : 'ADD_TODO', text: todoValue})
		setTodoValue("")
	}

	useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])

  return (
		<div className="App">
			Clicked : {counter} times
			{' '}
			<button onClick={onIncrement}>
				+
			</button>
			<button onClick={onDecrement}>
				-
			</button>

			<ul>
				{todos.map((todo,index) => <li key={index}>{todo}</li>)}
			</ul>

			<form onSubmit={addTodo}>
				<input type="text" value={todoValue} onChange={handleChage}/>
				<input type="submit" />
			</form>
			
			<ul>
				{posts.map((post, index) => <li key={index}>{post.title}</li>)}
			</ul>
		</div>
	);
}

export default App;

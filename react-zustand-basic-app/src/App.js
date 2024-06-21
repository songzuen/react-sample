import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import { useUserStore } from './store/useUserStore';
import { useEffect } from 'react';

function App() {
	const { fetch, user } = useUserStore()
	useEffect(() => {
		fetch(1)
	}, [fetch])
	console.log('user', user)
	
	return (
		<div className="App">
			<header className='App-header'>
				<Counter />
				<TodoList />
			</header>
		</div>
	);
}

export default App;

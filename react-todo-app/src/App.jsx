import { useState, Component } from 'react'
import './App.css'
import Lists from './components/Lists';
import Form from './components/Form';
export default function App() {
	const initTodoData = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [];

	const [todoData, setTodoData] = useState(initTodoData);

	const [value, setValue] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault();
	
		let newTodo = {
			id : Date.now(),
			title : value,
			completed : false
		}
	
		setTodoData([...todoData, newTodo])
		setValue('');

		localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]));
	}
	return (
		<div className='container'>
			<div className='todoBlock'>
				<div className='title'>
					<h1>할 일 목록</h1>
					<Lists todoData={ todoData } setTodoData={ setTodoData } />
					<Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
				</div>
			</div>
		</div>
	)
}

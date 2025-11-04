import { useState } from 'react'
import './App.css'
export default function App() {
	const [todoData, setTodoData] = useState([
			{
				id : 1,
				title : '공부하기',
				completed : true
			}, {
				id : 2,
				title : '청소하기',
				completed : false
			}
		]);

	const [value, setValue] = useState('');

	const btnStyle = {
		color : '#fff',
		border : 'none',
		padding : '5px 9px',
		borderRadius : '50%',
		cursor : 'pointer',
		float : 'right'
	}

	const getStyle = (completed) => {
		return {
			padding : '10px',
			borderBottom : '1px #ccc dotted',
			textDecoration : completed ? 'line-through' : 'none'
		}
	}

	const handleClick = (id) => {
		console.log(id)
		let newTodoData = todoData.filter((data) => (data.id !== id));
		
		setTodoData(newTodoData);
	}

	const handleChange = (e) => {
		setValue(e.target.value);
	}

	const handleCompleteChange = (id) => {
		let newTodoData = todoData.map((data) => {
			if(data.id === id){
				data.completed = !data.completed;
			}
			return data;
		})
		setTodoData(newTodoData);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		let newTodo = {
			id : Date.now(),
			title : value,
			completed : false
		}

		// 전개연산자 사용
		setTodoData([...todoData, newTodo]);
		setValue('');
	}

	return (
		<div className='container'>
			<div className='todoBlock'>
				<div className='title'>
					<h1>할 일 목록</h1>
					{
						todoData.map((data) => (
							<div key={data.id} style={getStyle(data.completed)}>
							<input type="checkbox" checked={data.completed} onChange={() => handleCompleteChange(data.id)} />
							{data.title}
							<button style={btnStyle} onClick={() => handleClick(data.id)}>X</button>
						</div>
						))
					}

					<form style={{ display : 'flex' }} onSubmit={ handleSubmit } >
						<input type='text' name='value' style={{ flex : '10', padding : '5px' }} placeholder='할 일을 입력하세요.' value={ value } onChange={() => handleChange(event)} />
						<input type='submit' value='입력' className='btn' style={{ flex : '1' }}/>
					</form>
				</div>
			</div>
		</div>
	)
}

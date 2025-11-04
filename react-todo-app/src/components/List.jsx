	import { useState } from "react"

	export default function List({ id, title, completed, todoData, setTodoData }){
	const [isEditing, setIsEditing] = useState(false);
	const [editedTitle, setEditedTitle] = useState(title);

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
		let newTodoData = todoData.filter((data) => (data.id !== id));
		setTodoData(newTodoData);

		localStorage.setItem("todoData", JSON.stringify(newTodoData));
	}

	const handleCompleteChange = (id) => {
		let newTodoData = todoData.map((data) => {
			if(data.id === id){
				data.completed = !data.completed;
			}
			return data;
		})
		setTodoData(newTodoData);
		localStorage.setItem("todoData", JSON.stringify(newTodoData));
	}

	const handelEditChange = (e) => {
		setEditedTitle(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const newTodoData = todoData.map((data) => {
			if(data.id === id) {
				data.title = editedTitle;
			}
			return data;
		})

		setTodoData(newTodoData);
		setIsEditing(false);

		localStorage.setItem("todoData", JSON.stringify(newTodoData));
	}

	if(isEditing){
		return (
			<form style={getStyle(completed)} onSubmit={handleSubmit} >
				<input type="text" value={editedTitle}  autoFocus onChange={() => handelEditChange(event)} />
				<button type="button" style={btnStyle} onClick={() => setIsEditing(false)}>X</button>
				<button type="submit" style={btnStyle} >Save</button>
			</form>
		)
	} else {
		return (
			<div style={getStyle(completed)}>
				<input type="checkbox" checked={completed} onChange={() => handleCompleteChange(id)} />
				{title}
				<button style={btnStyle} onClick={() => setIsEditing(true)}>Edit</button>
				<button style={btnStyle} onClick={() => handleClick(id)}>X</button>
			</div>
		)
	}
}
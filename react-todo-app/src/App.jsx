import { Component } from 'react'
import './App.css'
export default class App extends Component {

	state = {
		todoData : [
			{
				id : 1,
				title : '공부하기',
				completed : true
			}, {
				id : 2,
				title : '청소하기',
				completed : false
			}
		],
		value : ''
	}

	btnStyle = {
		color : '#fff',
		border : 'none',
		padding : '5px 9px',
		borderRadius : '50%',
		cursor : 'pointer',
		float : 'right'
	}

	getStyle = (completed) => {
		return {
			padding : '10px',
			borderBottom : '1px #ccc dotted',
			textDecoration : completed ? 'line-through' : 'none'
		}
	}

	handleClick = (id) => {
		console.log(id)
		let newTodoData = this.state.todoData.filter((data) => (data.id !== id));
		console.log(newTodoData);
		this.setState({todoData : newTodoData});
	}

	handleChange = (e) => {
		this.setState({value : e.target.value})
	}

	handleCompleteChange = (id) => {
		let newTodoData = this.state.todoData.map((data) => {
			if(data.id === id){
				data.completed = !data.completed;
			}
			return data;
		})
		this.setState({todoData : newTodoData});s
	}

	handleSubmit = (e) => {
		e.preventDefault();

		let newTodo = {
			id : Date.now(),
			title : this.state.value,
			completed : false
		}

		// 전개연산자 사용
		this.setState({ todoData : [...this.state.todoData, newTodo], value : '' });
	}

	render(){
		return (
			<div className='container'>
				<div className='todoBlock'>
					<div className='title'>
						<h1>할 일 목록</h1>
						{
							this.state.todoData.map((data) => (
								<div key={data.id} style={this.getStyle(data.completed)}>
								<input type="checkbox" checked={data.completed} onChange={() => this.handleCompleteChange(data.id)} />
								{data.title}
								<button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>X</button>
							</div>
							))
						}

						<form style={{ display : 'flex' }} onSubmit={ this.handleSubmit } >
							<input type='text' name='value' style={{ flex : '10', padding : '5px' }} placeholder='할 일을 입력하세요.' value={ this.state.value } onChange={() => this.handleChange(event)} />
							<input type='submit' value='입력' className='btn' style={{ flex : '1' }}/>
						</form>

						{/* <div style={this.getStyle()}>
							<input type="checkbox" defaultChecked={false} />
							공부하기
							<button style={this.btnStyle}>X</button>
						</div>

						<div style={this.getStyle()}>
							<input type="checkbox" defaultChecked={false} />
							청소하기
							<button style={this.btnStyle}>X</button>
						</div> */}
					</div>
				</div>
			</div>
		)
	}
}

import List from './List';

export default function Lists({ todoData, setTodoData }){
	return (
		todoData.map((data) => (
			<List key={data.id} id={data.id}  title={data.title} completed={data.completed}
			todoData={todoData} setTodoData={setTodoData} />
		))
    )
}
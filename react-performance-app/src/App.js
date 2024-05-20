import { useEffect, useState } from 'react';
import './App.css';
import A from './components/A';
import B from './components/B';

function App() {
	const [value, setValue] = useState("")
	const [posts, setPosts] = useState([])

	// useEffect : 컴포넌트가 랜더링될 때 특정작업을 실행할 수 있도록 하는 hook.
	useEffect(()=>{
		// fetch : 원격 API에 요청을 보내기 위해 사용할 수 있는 메소드
		// 가짜 데이터 제공하는 무료 온라인 rest API
		// https://jsonplaceholder.typicode.com/posts
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.then(posts => setPosts(posts))
	}, []);
	return (
		<div style={{ padding : "1rem"}}>
			<input value={value} onChange={e => setValue(e.target.value)} />
			<div style={{ display : "flex"}}>
				<A message={value} posts={posts} />
				<B message={value} posts={posts} />
			</div>
		</div>
	)
}

export default App;

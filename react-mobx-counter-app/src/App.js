import { observer } from 'mobx-react';
import './App.css';
import { useContext } from 'react';
import { CounterContext, useCounterStore } from './context/counterContext';
import counterStore from './counterStore';

// function App(props) {

// 	// 렌더링 중 사용되는 observable React 구성 요소를 구독
// 	const {myCounter} = props.myCounter
// 	console.log('myCounter', myCounter)

// 	return (
// 		<div style={{textAlign : 'center', padding : '16px'}}>
// 			카운트 : {myCounter.count}
// 			<br/>
// 			<br/>
// 			마이너스 : {myCounter.isNegative}
// 			<br/>
// 			<br/>
// 			<button onClick={() => myCounter.increase()}>+</button>
// 			<button onClick={() => myCounter.decrease()}>-</button>
// 		</div>
// 	);
// }

function App() {
	// const myCounter = useContext(CounterContext);
	const myCounter = useCounterStore();
	
	console.log('myCounter', myCounter)

	return (
		<div style={{textAlign : 'center', padding : '16px'}}>
			카운트 : {myCounter.count}
			<br/>
			<br/>
			마이너스 : {myCounter.isNegative}
			<br/>
			<br/>
			<button onClick={() => myCounter.increase()}>+</button>
			<button onClick={() => myCounter.decrease()}>-</button>
		</div>
	);
}

export default observer(App);

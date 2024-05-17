import { useState } from 'react';
import './App.css';
import Board from './components/Board';

// 함수형 컴포넌트
function App() {
	const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
	const [xIsNext, setXIsNext] = useState(true)
	const [stepNumber, setStepNumber] = useState(0);
	// const current = history[history.length - 1];
	const current = history[stepNumber];

	const calculateWinner = (squares) => {
		// 모든 경우의 수 나열
		const lines = [
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[2,4,6]
		]

		for(let index = 0; index < lines.length; index++){
			const [a,b,c] = lines[index];
			if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
				return squares[a];
			}
		}
	}

	const winner = calculateWinner(current.squares)
	let status;
	if(winner) {
		status = 'Winner : ' + winner
	} else {
		status = `Next player ${xIsNext ? 'X' : 'O'}`
	}

	const handleClick = (i) => {
		const newHistory = history.slice(0, stepNumber + 1);
		const newCurrent = newHistory[newHistory.length - 1];
		const newSqures = newCurrent.squares.slice();

		if(calculateWinner(newSqures) || newSqures[i]) {
			return;
		}

		newSqures[i] = xIsNext ? 'X' : 'O'
		// 전개연산자 : history에 있는 배열을 늘어뜨림
		setHistory([...newHistory, { squares: newSqures }]);
		setXIsNext(prev => !prev)

		setStepNumber(newHistory.length);
	}

	const jumpTo = (step) => {
		setStepNumber(step);
		console.log(stepNumber);
		setXIsNext(step % 2 === 0)
	}

	const moves = history.map((step, move) => {
		const desc = move ? 'Go to move #' + move : 'Go to game start';
		return (
			<li key={move}>
				<button className="move-button" onClick={() => jumpTo(move)}>{desc}</button>
			</li>
		)
	})

	return (
		// html이 아닌 jsx를 사용하여 구현
		// jsx는 js와 html 구조를 같이 사용
		<div className="game">
			<div className="game-board">
				<Board squares={current.squares} onClick={(i) => handleClick(i)}/>
			</div>
			<div className="game-info">
				<div><div className='status'>{status}</div> </div>
				<ol style={{listStyleType : "none" }}>{moves} </ol>
			</div>
		</div>
	);
}

export default App;
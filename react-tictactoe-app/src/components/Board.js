import React, { useState } from 'react'
import Square from './Squre'
import './Board.css'
// 함수형 컴포넌트
const Board = () => {
	// 함수형 컴포넌트
	// hooks 생성
	const [squares, setSquares] = useState(Array(9).fill(null))
	const [xIsNext, setXIsNext] = useState(true)

	const handleClick = (i) => {
		const newSqures = squares.slice();

		if(calculateWinner(newSqures) || newSqures[i]) {
			return;
		}

		newSqures[i] = xIsNext ? 'X' : 'O'
		setSquares(newSqures);
		setXIsNext(current => !current)
	}

	// renderSquare(i){
	const renderSquare = (i) => {
		// props는 읽기전용이라 부모컨포넌트에서 설정
		// return <Square value={i} />;
		// return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
		return <Square value={squares[i]} onClick={() => handleClick(i)} />
	}

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

	const winner = calculateWinner(squares);
	let status;
	if(winner) {
		status = 'Winner : ' + winner
	} else {
		status = `Next player ${xIsNext ? 'X' : 'O'}`
	}

	return (
		<div>
			<div className='status'>{status}</div>
			<div className='board-row'>
				{/* <button className="square">
					Square
				</button> */}
				{/* <Squre /> */}
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className='board-row'>
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className='board-row'>
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	)
}

export default Board
// rcc 사용시 클래스 컴포넌트를 작성할 수 있음
// rfc 작성시 함수형 컴포넌트를 자동으로 작성
import React, { Component } from 'react'
import Square from './Squre'
import './Board.css'

// default class로 사용하는 경우 메인으로 밖으로 빼줌.
// import {} 없이 사용하는 경우 해당 클래스만 import
// import {Square1, Square2, Square3} from './Squre' 
// import Square from './Squre
export default class Board extends Component {
	renderSquare(i){
		// props는 읽기전용이라 부모컨포넌트에서 설정
		return <Square value={i} />;
	}

	render() {
		// const status = 'Next player : X';
		return (
			<div>
				<div className='status'>Next Player : X, O</div>
				<div className='board-row'>
					{/* <button className="square">
						Square
					</button> */}
					{/* <Squre /> */}
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className='board-row'>
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className='board-row'>
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		)
	}
}

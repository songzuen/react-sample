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
	// props
	//	- 부모 컴포넌트로 부터 자녀 컴포넌트로 데이터를 전달
	//	- 읽기 전용
	// state
	//	- 부모컴포넌트에서 자녀 컴포넌트로 데이터를 보내는게 아닌 해당 컨포넌트 내부에서 데이터를 전달
	//	- state는 변경 가능

	// 다른 자녀 컴포넌트에서도 사용하기 위해 부모컴포넌트에 정의
	// Square.js에서 복사해서 가져옴
	constructor(props){
		super(props);
		this.state = {
			// value : null

			// square의 9개의 데이터를 배열로 관리
			squares:Array(9).fill(null)
		}
	}

	handleClick(i){
		// slice() => 원본 배열은 바뀌지 않음
		// 참조 타입(array, object)에서 객체나 배열의 값이 변할 때 원본 데이터가 변겨되기 때문에 불변성을 지켜야함
		// 불변성을 유지하기 위해서는 아예 새로운 배열로 반환처리
		// 불변성을 지키는 법 : spread, operator, map, filter, slice, reduce
		const squares = this.state.squares.slice();
		squares[i] = 'X';
		this.setState({ squares : squares });
	}

	renderSquare(i){
		// props는 읽기전용이라 부모컨포넌트에서 설정
		// return <Square value={i} />;
		return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
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
import React from "react"
import './Square.css'

// 클래스형 컴포넌트 생성
// extends 클래스를 자식 클래스로 사용하기 위해 선언

export default class Square extends React.Component{
	// state 생성
	// 인스턴스화된 객체에서 다른 메서드를 호출 전 수행해야하는 사용자 지정 초기화 제공
	// 클래스를 new를 붙여서 인스턴스 객체로 생성하여 넘겨받은 인수랑 함께 먼저 실행
	constructor(props){
		super(props);
		this.state = {
			value : null
		}
	}

	render(){
		return (
			// <button className="square" onClick={() => console.log('click')}>
			// state 변경하기
			// 데이터가 변할 때 다시 렌더링해주기 위해서 react status를 사용해야함
			<button className="square" onClick={() => this.setState({value:'X'})}>
				{/* props 사용하기 */}
				{/* {this.props.value} */}

				{/* state 이용하기 */}
				{this.state.value}
			</button>
		)
	}
}
// 인스턴스화
// new Square(props)

// export class Square1 extends React.Component{
// 	render(){
// 		return (
// 			<button className="square">
// 				Square
// 			</button>
// 		)
// 	}
// }

// export class Square2 extends React.Component{
// 	render(){
// 		return (
// 			<button className="square">
// 				Square
// 			</button>
// 		)
// 	}
// }

// export class Square3 extends React.Component{
// 	render(){
// 		return (
// 			<button className="square">
// 				Square
// 			</button>
// 		)
// 	}
// }
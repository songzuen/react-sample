import React from "react"
import './Square.css'

// 함수형 컴포넌트 생성
const Square = ({onClick, value}) => {
	return (
		<button className="square" onClick={onClick}>
		{value}
		</button>
	)
}

export default Square
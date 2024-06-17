import React, { Component, useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../todoAtom';

/**
 * todoListState 내용을 업데이트 하는 setter 함수에 접근
 * useSetRecoilState() 훅 사용
 */
const TodoItemCreator = () => {
	const [inputValue, setInputValue] = useState('');

	// atom을 update하는 hooks 호출
	const setTodoList = useSetRecoilState(todoListState)

	const addItem = () => {
		setTodoList((oldTodoList) => [
			...oldTodoList,
			{
				id : getId(),
				text : inputValue,
				isComplete : false
			}
		])
		setInputValue('')
	}

	const handleChange = (e) => {
		setInputValue(e.target.value)
	}

	return (
		<div>
			<input type='text' value={inputValue} onChange={handleChange} />
			<button onClick={addItem}>Add</button>
		</div>
	)
}

// 고유한 id 생성을 위한 유틸리티
let id = 0;
function getId() {
	return id++;
}

export default TodoItemCreator
import React, { useCallback } from 'react'

// React.memo()로 둘러쌓여있다면 컴포넌트를 렌더링하고 결과를 메모이징(Memoizing) 처리
// 다음 렌더링이 일어날때 렌더링하는 컴포넌트의 props가 같다면 메모이징(Memoizing) 내용을 재사용한다.
// 얕은 비교(원시 자료형은 값을 비교, 배열,객체 등 참조 자료형은 참조되는 위치를 비교)
// state에 변경이 있을 때 / 부모컴포넌트가 렌더링될 때 얕은 비교를 사용

// 깊은 비교(객체의 경우에도 값을 비교)
// json.stringify() 및 lodash 라이브러리의 isEqual() 사용

// 지양해야하는 경우
// - props가 대부분 다를 때 

// 메모이제이션 : 비용이 많이 드는 함수 호출 결과를 저장하고 동일한 입력이 다시 발생할 때 캐시된 결과를 반환하여 컴퓨터 프로그램의 속도를 높이는데 사용되는 최적화 기술
// useMemo : 함수에 넘겨주는 값이 이전과 동일하다면 컴포넌트가 리 렌더링 되더라도 연산을 다시 하지 않고 렌더링 때 저장해두었던 값을 재활용

const Message = React.memo(({message}) => {
	return <p>{message}</p>
})

const ListItem = React.memo(({post}) => {
	return (
		<li key={post.id}>
			<p>{post.title}</p>
		</li>
	)
}
// 해당 위치에 두번째 매개변수(비교함수) 작성
)

const List = React.memo(({posts, testFunction}) => {
	console.log('List Component is rendering')
	return (
		<ul>
			{posts.map(post => (
				<ListItem key={post.id} post={post} />
			))}
		</ul>
	)
})

const B = ({message, posts}) => {
	console.log('B Component is rendering')
	// useCallback 메모이제이션된 함수를 반환
	// useCallback 안에 콜백함수와 의존성 배열을 넣어줌
	// 의존성 배열이 변경될 때만 렌더링
	const testFunction = useCallback(() => {}, [])

	return (
		<div>
			<h1>B components</h1>
			<Message message={message} />
			<List posts={posts} testFunction={testFunction}></List>
		</div>
	)
}

export default B
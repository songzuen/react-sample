import React from 'react'

const A = ({message, posts}) => {
  return (
	<div>
		<h1>A components</h1>
		<p>{message}</p>
		<ul>
			{posts.map(post => {
				// 중괄호 사용시 return 사용 / 괄호 사용시 return 생략 가능
				return(
					<li key={post.id}>
						<p>{post.title}</p>
					</li>
				)
			})}
		</ul>
	</div>
  )
}

export default A
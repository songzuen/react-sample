import React from 'react'

const Products = ({name, imagePath}) => {
	console.log('name', name)
	console.log('imagePath', imagePath)
	return (
		<div style={{ textAlign : 'center'}}>
			<img style={{width : '75%'}} src={`http://localhost:4000/${imagePath}`} alt={`${name} product`} />
			<form>
				<label style={{ textAlign : 'right'}}>{name}</label>
				<input style={{marginLeft : '7px'}} type='number' name='quantity' />
			</form>
		</div>
	)
}

export default Products